import Layout from "@/Layouts/AuthenticatedLayout";

import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, errors, post } = useForm({
        name_long: "",
        name_short: "",
        address_text: "",
        address_place: "",
        address_pobr: "",
        address_state: "",
        oib: "",
        contact_person: "",
        contact_email: "",
        contact_phone: "",
        notes: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("organisers.create"));
    }

    return (
        <Layout>
            <article>
                <header>neak</header>
                <label> PUNI NAZIV ORGANIZATORA [{data.name_long}]</label>
                <input
                    type="text"
                    name="name_long"
                    id="name_long"
                    placeholder="artmedia d.o.o."
                    onChange={(e) => setData("name_long", e.target.value)}
                />

                <label>KRATKI NAZIV ORGANIZATORA</label>
                <input
                    type="text"
                    name="name_short"
                    id="name_short"
                    placeholder="kratki naziv"
                    onChange={(e) => setData("name_short", e.target.value)}
                />

                <label>OIB</label>
                <input
                    type="text"
                    name="oib"
                    id="oib"
                    onChange={(e) => setData("oib", e.target.value)}
                />

                <label>ADRESA </label>
                <div>
                    <input
                        type="text"
                        name="adress_text"
                        id="adress_text"
                        placeholder="TRG. sv floriajna"
                        onChange={(e) => setData("adress_text", e.target.value)}
                    />
                    <div className="grid">
                        <input
                            type="text"
                            name="adress_palce"
                            id="adress_palce"
                            placeholder="ZAGREB"
                            onChange={(e) =>
                                setData("adress_palce", e.target.value)
                            }
                        />
                        <input
                            type="text"
                            name="adress_pobr"
                            id="adress_pobr"
                            placeholder="10000"
                            onChange={(e) =>
                                setData("adress_pobr", e.target.value)
                            }
                        />
                    </div>
                    <input
                        type="text"
                        name="adress_stat"
                        id="adress_stat"
                        placeholder="`Rvacka"
                        onChange={(e) => setData("adress_stat", e.target.value)}
                    />
                </div>

                <label>KONTAKT OSOBA</label>
                <input
                    type="text"
                    name="contact_person"
                    id="contact_person"
                    onChange={(e) => setData("contact_person", e.target.value)}
                />
                <label>KONTAKT EMAIL</label>
                <input
                    type="email"
                    name="contact_email"
                    id="contact_email"
                    onChange={(e) => setData("contact_email", e.target.value)}
                />
                <label>KONTAKT BROJ</label>
                <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    name="contact_phone"
                    id="contact_phone"
                    onChange={(e) => setData("contact_phone", e.target.value)}
                />

                <input type="submit" value="SPREMI" onSubmit={() => submit} />
            </article>
        </Layout>
    );
};

export default Create;
