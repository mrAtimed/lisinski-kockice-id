import Layout from "@/Layouts/AuthenticatedLayout";
import Select from "react-select";

import { useForm } from "@inertiajs/react";

const Create = ({ auth, types, organizers, terms, vezani }) => {
    const { data, setData, errors, post } = useForm({
        name: auth.user.email,
        notes: "",
        term_id: vezani,
        created_by: auth.user.id,
    });

    function submit(e) {
        e.preventDefault();
        post("/terms");
    }

    const organisersOptions = organizers.map((org) => {
        return {
            value: `${org.id}`,
            label: `${org.name_long}`,
        };
    });

    const termsOptions = terms.map((term) => {
        return {
            value: term.id,
            label: `${term.name_long} [#${term.id}]`,
        };
    });

    return (
        <>
            <article>
                <header>
                    <b>Dodaj novi termin</b>
                </header>
                <form>
                    <table role="grid">
                        <thead>
                            <tr>
                                <td
                                    style={{
                                        width: "17ch",
                                    }}
                                ></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <b>NAZIV</b>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="name_long"
                                        id="name_long"
                                        placeholder="name"
                                        minLength={3}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>START END</b>
                                </td>
                                <td>
                                    <div className="grid">
                                        <input
                                            type="text"
                                            name="start"
                                            id="start"
                                            placeholder="start"
                                            minLength={2}
                                            maxLength={5}
                                        />
                                        <input
                                            type="text"
                                            name="end"
                                            id="end"
                                            placeholder="end"
                                            minLength={2}
                                            maxLength={5}
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>DATUM</b>
                                </td>
                                <td>
                                    <input type="date" name="date" id="date" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>VRSTA TERMINA</b>
                                </td>
                                <td>
                                    <select required>
                                        {types.map((item) => (
                                            <option key={item.id}>
                                                {item.name_long}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>ORGANIZATOR</b>
                                </td>
                                <td>
                                    <Select
                                        placeholder={"Odaberi..."}
                                        isClearable
                                        options={organisersOptions}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>VEZANI TERMIN</b>
                                </td>
                                <td>
                                    <Select
                                        placeholder={"Odaberi..."}
                                        isClearable
                                        options={termsOptions}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>ULAZ</b>
                                </td>
                                <td>
                                    <div className="grid">
                                        <input
                                            type="text"
                                            name="ulaz"
                                            id="ulaz"
                                            min={2}
                                            max={5}
                                            placeholder="ulaz"
                                        />
                                        <input
                                            type="text"
                                            name="izlaz"
                                            id="izlaz"
                                            min={2}
                                            max={5}
                                            placeholder="izlaz"
                                        />
                                    </div>
                                </td>
                            </tr>

                            {/* appertments */}
                            <tr>
                                <td>APARTMANI</td>
                                <td></td>
                            </tr>
                            {/* appertments */}
                            <tr>
                                <td>
                                    <b>PAUZA</b>
                                </td>

                                <td>
                                    <input
                                        type="number"
                                        name="audience_break"
                                        id="audience_break"
                                        placeholder="min"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>KONTAKT</b>
                                </td>
                                <td>
                                    <div className="grid">
                                        <input
                                            type="text"
                                            name="osoba"
                                            id="osoba"
                                            min={2}
                                            placeholder="osoba"
                                        />
                                        <input
                                            type="text"
                                            name="tel"
                                            id="tel"
                                            min={2}
                                            placeholder="tel"
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>IZVOĐAČI</b>
                                </td>
                                <td>
                                    <textarea
                                        name="izvodaci"
                                        id="izvodaci"
                                        cols="30"
                                        rows="5"
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>PROGRAM</b>
                                </td>
                                <td>
                                    <textarea
                                        name="program"
                                        id="program"
                                        cols="30"
                                        rows="5"
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>RADIO-TV</b>
                                </td>
                                <td>
                                    <textarea
                                        name="radio"
                                        id="radio"
                                        cols="30"
                                        rows="5"
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>DOMJENAK</b>
                                </td>
                                <td>
                                    <textarea
                                        name="domjenak"
                                        id="domjenak"
                                        cols="30"
                                        rows="5"
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>NAPOMENE</b>
                                </td>
                                <td>
                                    <textarea
                                        name="extra"
                                        id="extra"
                                        cols="30"
                                        rows="5"
                                    ></textarea>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>ULAZNICE ?</b>
                                </td>
                                <td>
                                    <div className="grid">
                                        <label htmlFor="tickets_paid">
                                            PLAČENE
                                        </label>
                                        <input
                                            type="checkbox"
                                            name="tickets_paid"
                                            id="tickets_paid"
                                        />
                                        <label htmlFor="tickets_subscriber">
                                            PRETPLATNICKE
                                        </label>
                                        <input
                                            type="checkbox"
                                            name="tickets_subscriber"
                                            id="tickets_subscriber"
                                        />

                                        <label htmlFor="tickets_invatations">
                                            POZIVNICE
                                        </label>
                                        <input
                                            type="checkbox"
                                            name="tickets_invatations"
                                            id="tickets_invatations"
                                        />
                                        <label htmlFor="tickets_accreditation">
                                            AKREDITACIJA
                                        </label>
                                        <input
                                            type="checkbox"
                                            name="tickets_accreditation"
                                            id="tickets_accreditation"
                                        />
                                        <label htmlFor="tickets_free">
                                            BESPLATNI ULAZ
                                        </label>
                                        <input
                                            type="checkbox"
                                            name="tickets_free"
                                            id="tickets_free"
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <details>
                                        <summary>
                                            <b>POZORNICA</b>
                                        </summary>
                                        <b>DEŽURNI INSPICIJENT</b>
                                        <input
                                            type="text"
                                            name="staige_on_duty"
                                            id="staige_on_duty"
                                        />
                                        <b>INSPICIJENT NAPOMENA</b>
                                        <textarea
                                            name="audience_notes"
                                            id=""
                                            audience_notes
                                            cols="30"
                                            rows="6"
                                            placeholder="..."
                                        ></textarea>
                                    </details>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <details>
                                        <summary>
                                            <b>RASVIJETA</b>
                                        </summary>
                                        <b>DEŽURNI RAZVIJETA ?</b>
                                        <input
                                            type="text"
                                            name="light_on_duty"
                                            id="light_on_duty"
                                        />
                                        <b>RAZVIJETA NAPOMENA</b>
                                        <textarea
                                            name="audience_notes"
                                            id=""
                                            audience_notes
                                            cols="30"
                                            rows="6"
                                            placeholder="..."
                                        ></textarea>
                                    </details>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <details>
                                        <summary>
                                            <b>TONAC</b>
                                        </summary>
                                        <b>DEŽURNI TONAC</b>
                                        <input
                                            type="text"
                                            name="sound_on_duty"
                                            id="sound_on_duty"
                                        />
                                        <b>TONAC NAPOMENA</b>
                                        <textarea
                                            name="audience_notes"
                                            id=""
                                            audience_notes
                                            cols="30"
                                            rows="6"
                                            placeholder="..."
                                        ></textarea>
                                    </details>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <input
                        type="submit"
                        value="DODAJ NOVO"
                        onClick={(e) => submit(e)}
                    />
                </form>
            </article>
        </>
    );
};
Create.layout = (page) => <Layout children={page} />;

export default Create;
