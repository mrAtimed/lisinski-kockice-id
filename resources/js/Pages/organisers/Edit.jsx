import Layout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

const Edit = ({ organiser }) => {
    const { data, setData, errors, put } = useForm({
        name_long: organiser.name_long,
        name_short: organiser.name_short,
        address_text: organiser.address_text,
        address_place: organiser.adress_palce,
        address_pobr: organiser.address_pobr,
        address_state: organiser.address_state,
        oib: organiser.oib,
        contact_person: organiser.contact_person,
        contact_email: organiser.contact_email,
        contact_phone: organiser.contact_phone,
        notes: organiser.notes,
    });

    function submit(e) {
        e.preventDefault();
        put(route("organisers.update", organiser.id));
    }
    return (
        <>
            <article>
                <header>
                    UREDI <b>"{data.name_long}"</b>
                </header>
                <table role="grid">
                    <thead>
                        <tr>
                            <td style={{ width: "20ch" }}></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PUNI NAZIV</td>
                            <td>
                                <input
                                    type="text"
                                    name="name_long"
                                    id="name_long"
                                    placeholder="artmedia d.o.o."
                                    value={data.name_long}
                                    onChange={(e) =>
                                        setData("name_long", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>KRATKI NAZIV</td>
                            <td>
                                <input
                                    type="text"
                                    name="name_short"
                                    id="name_short"
                                    placeholder="kratki naziv"
                                    value={data.name_short}
                                    onChange={(e) =>
                                        setData("name_short", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>OIB</td>
                            <td>
                                <input
                                    type="text"
                                    name="oib"
                                    id="oib"
                                    placeholder="oib"
                                    value={data.oib}
                                    onChange={(e) =>
                                        setData("oib", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>ADRESA</td>
                            <td>
                                <input
                                    type="text"
                                    name="adress_text"
                                    id="adress_text"
                                    placeholder="..."
                                    value={data.adress_text}
                                    onChange={(e) =>
                                        setData("adress_text", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    name="adress_palce"
                                    id="adress_palce"
                                    placeholder="Grad"
                                    value={data.adress_palce}
                                    onChange={(e) =>
                                        setData("adress_palce", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    name="adress_pobr"
                                    id="adress_pobr"
                                    placeholder="Poštnski broj"
                                    value={data.adress_pobr}
                                    onChange={(e) =>
                                        setData("adress_pobr", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    name="adress_stat"
                                    id="adress_stat"
                                    placeholder="Zemlja"
                                    value={data.adress_stat}
                                    onChange={(e) =>
                                        setData("adress_stat", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>KONTAKT OSOBA</td>
                            <td>
                                <input
                                    type="text"
                                    name="contact_person"
                                    id="contact_person"
                                    value={data.contact_person}
                                    placeholder="Kontakt ime"
                                    onChange={(e) =>
                                        setData(
                                            "contact_person",
                                            e.target.value
                                        )
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="email"
                                    name="contact_email"
                                    id="contact_email"
                                    value={data.contact_email}
                                    placeholder="Kontakt email"
                                    onChange={(e) =>
                                        setData("contact_email", e.target.value)
                                    }
                                />
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="tel"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    name="contact_phone"
                                    id="contact_phone"
                                    value={data.contact_phone}
                                    placeholder="Kontakt tel."
                                    onChange={(e) =>
                                        setData("contact_phone", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <input type="submit" value="SPREMI" onSubmit={() => submit} />
            </article>
        </>
    );
};
Edit.layout = (page) => <Layout children={page} />;
export default Edit;
