import Layout from "@/Layouts/AuthenticatedLayout";

import { Link } from "@inertiajs/react";
import Paginate from "@/Components/ui/Paginate";

import BtnEdit from "@/Components/btns/BtnEdit";
import BtnDelete from "@/Components/btns/BtnDelete";
const Show = ({ term, org }) => {
    return (
        <>
            <article>
                <header className="flex">
                    <b>{org.name_long}</b>
                    <kbd>#{org.id}</kbd>
                </header>
                <table role="grid">
                    <thead>
                        <td></td>
                        <td></td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ADRESA</td>
                            <td>{org.address_text || "-------"}</td>
                        </tr>
                        <tr>
                            <td>OIB</td>
                            <td>
                                {org.oib || "-------"}
                                {org.pobr && ", " + org.pobr}
                                {org.place && ", " + org.place}
                                {org.state && ", " + org.state}
                            </td>
                        </tr>
                        {org.contact_person && (
                            <tr>
                                <td>KONTAKTO OSOBA</td>
                                <td>{org.contact_person}</td>
                            </tr>
                        )}

                        {org.contact_email && (
                            <tr>
                                <td>KONTAKTO EMAIL</td>
                                <td>{org.contact_email}</td>
                            </tr>
                        )}

                        {org.contact_phone && (
                            <tr>
                                <td>KONTAKTO TEL.</td>
                                <td>{org.contact_phone}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </article>
            <div className="flex">
                <span>POVEZANI TERMINI</span>
                <span>
                    <b>UKUPNO:</b> {term.total}
                </span>
            </div>
            <br />
            {term.data.map((item) => (
                <article key={item.id}>
                    <div className="flex">
                        <div>
                            <Link href={route("terms.show", item.id)}>
                                <b>{item.name_long}</b>
                            </Link>
                            <p>{item.date}</p>
                        </div>
                        <kbd>#{item.id}</kbd>
                    </div>
                </article>
            ))}
            <Paginate links={term.links}></Paginate>
        </>
    );
};
Show.layout = (page) => (
    <Layout
        children={page}
        btn={
            <>
                <li>
                    <BtnEdit href={"organisers.edit"} id={page.props.org.id}></BtnEdit>
                </li>
                <li>
                    <BtnDelete></BtnDelete>
                </li>
            </>
        }
    />
);
export default Show;
