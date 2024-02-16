import Layout from "@/Layouts/AuthenticatedLayout";
import IsEmpty from "@/Components/ui/IsEmpty";
import Paginate from "@/Components/ui/Paginate";
import Search from "@/Components/ui/Search";
import BtnCreate from "@/Components/btns/BtnCreate";
import { highlightText } from "@/Utilities/TextHighlighter";

import { Link } from "@inertiajs/react";

const Index = ({ organizers }) => {
    return (
        <>
            <Search data={organizers}></Search>

            <IsEmpty items={organizers.data}></IsEmpty>

            {organizers.data.map((item) => (
                <article key={`organisers-${item.id}`}>
                    <header>
                        <div className="flex">
                            <Link href={route("organisers.show", item.id)}>
                                {highlightText(
                                    item.name_long,
                                    route().params.q
                                )}

                                {item.name_short && ` [ ${item.name_short} ]`}
                            </Link>
                            <b>#{highlightText(item.id, route().params.q)}</b>
                        </div>
                    </header>
                    <table role="grid">
                        <thead>
                            <tr>
                                <td style={{ width: "20ch" }}></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {item.oib && (
                                <tr>
                                    <td>OIB</td>
                                    <td>
                                        {highlightText(
                                            item.oib,
                                            route().params.q
                                        )}
                                    </td>
                                </tr>
                            )}
                            {item.address_text && (
                                <tr>
                                    <td>ADRESA</td>
                                    <td>{item.address_text}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </article>
            ))}

            <Paginate links={organizers.links}></Paginate>
        </>
    );
};
Index.layout = (page) => (
    <Layout
        children={page}
        title="usluge"
        btn={
            <li>
                <BtnCreate href="organisers.create"></BtnCreate>
            </li>
        }
    />
);

export default Index;
