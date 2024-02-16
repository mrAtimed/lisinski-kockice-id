import Layout from "@/Layouts/AuthenticatedLayout";
// import IsEmpty from "@/Components/ui/IsEmpty";
// import Paginate from "@/Components/ui/Paginate";
import Search from "@/Components/ui/Search";
import BtnCreate from "@/Components/btns/BtnCreate";
import { highlightText } from "@/Utilities/TextHighlighter";

import moment from "moment";

import { Link } from "@inertiajs/react";
import LabelDvorana from "@/Components/ui/LabelDvorana";
import Paginate from "@/Components/ui/Paginate";
const Index = ({ terms }) => {
    const game = "start";

    return (
        <>
            <Search data={terms}></Search>
            {terms.data.map((item, N) => (
                <article key={`terms-${N}`}>
                    <header>
                        <button
                            style={{ padding: "0.4rem 1rem" }}
                            className={(() => {
                                switch (item.types) {
                                    case "Ostalo":
                                        return "btn btn-gray";
                                    case "Priredba":
                                        return "btn btn-blue";
                                    case "Rezervacija":
                                        return "btn btn-orange";
                                    case "Postava":
                                        return "btn btn-red";
                                    default:
                                        return "btn btn-del";
                                }
                            })()}
                        >
                            <div className="flex">
                                <Link
                                    style={{ color: "white" }}
                                    href={route("terms.show", item.id)}
                                >
                                    <b>
                                        {highlightText(
                                            item.name_long,
                                            route().params.q
                                        )}
                                    </b>
                                </Link>
                                {item.type_id}
                            </div>
                        </button>
                    </header>
                    <details>
                        <summary>
                            <table role="grid">
                                <thead>
                                    <tr>
                                        <td style={{ width: "20ch" }}></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <b>DATUM</b>
                                        </td>
                                        <td>
                                            {moment(item.date).format(
                                                "DD.MM.`YY"
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>PROSTOR</b>
                                        </td>
                                        <td>
                                            <LabelDvorana
                                                id={item.dvorana}
                                            ></LabelDvorana>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <b>VRIJEME</b>
                                        </td>
                                        <td>
                                            {item.start} - {item.end}
                                        </td>
                                    </tr>
                                    {item.get_org && (
                                        <tr>
                                            <td>
                                                <b>ORGANIZATOR</b>
                                            </td>

                                            <td>
                                                <Link
                                                    href={route(
                                                        "organisers.show",
                                                        item.get_org.id
                                                    )}
                                                >
                                                    {item.get_org.name_long}
                                                </Link>
                                            </td>
                                        </tr>
                                    )}
                                    {item.contact_person && (
                                        <tr>
                                            <td>
                                                <b>KONTAKT</b>
                                            </td>

                                            <td>{item.contact_person} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </summary>
                        {item.izvodaci && (
                            <>
                                <hr />
                                <b className="toUpperCase">izvođači:</b>
                                <hr />
                                {item.izvodaci}
                            </>
                        )}
                        {item.program && (
                            <>
                                <hr></hr>
                                <b className="toUpperCase">program:</b>
                                <hr></hr>
                                {item.program}
                            </>
                        )}
                        {item.radio && (
                            <>
                                <hr />
                                <b className="toUpperCase">mediji:</b>
                                <hr></hr>

                                {item.radio}
                            </>
                        )}
                        {item.domjenak && (
                            <>
                                <hr />
                                <b className="toUpperCase">domjenak:</b>
                                <hr></hr>
                                {item.domjenak}
                            </>
                        )}
                        {item.extra && (
                            <>
                                <hr />
                                <b className="toUpperCase">ekstra:</b>
                                <hr></hr>
                                {item.extra}
                            </>
                        )}
                    </details>
                </article>
            ))}
            <Paginate links={terms.links}></Paginate>
        </>
    );
};
Index.layout = (page) => (
    <Layout
        children={page}
        title="Dashboard"
        btn={
            <li>
                <BtnCreate href="add"></BtnCreate>
            </li>
        }
    />
);
export default Index;
