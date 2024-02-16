import Layout from "@/Layouts/AuthenticatedLayout";
import Select from "react-select";

import moment from "moment";

import { useForm } from "@inertiajs/react";

const Create = ({ auth, types, organizers, terms, vezani }) => {
    const { data, setData, errors, post } = useForm({
        dvorana: "",
        name_long: "",
        org_id: "",
        term_id: vezani,
        date: "",

        start: "",
        end: "",

        type_id: 0,

        izvodaci: "",
        program: "",
        radio: "",
        domjenak: "",
        extra: "",

        contact_person: "",
        contact_num: "",

        entry_start: "",
        entry_end: "",

        stage_apart: 0,
        stage_solo: 0,
        stage_group: 0,

        tickets_paid: false,
        tickets_subscriber: false,
        tickets_invatations: false,
        tickets_accreditation: false,
        tickets_free: false,

        audience_break: "",
        audience_notes: "",

        staige_on_duty: "",
        staige_tickets_sold: "",
        staige_notes: "",

        sound_on_duty: "",
        sound_notes: "",

        light_on_duty: "",
        light_notes: "",

        created_by: 1,
    });

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

    function submit(e) {
        e.preventDefault();
        // post(route("terms.store"));
    }

    return (
        <>
            {console.log(errors)}
            <article>
                <header>Dodaj novi termin</header>
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
                                <td>NAZIV</td>
                                <td>
                                    <input
                                        type="text"
                                        name="name_long"
                                        id="name_long"
                                        placeholder="name"
                                        minLength={3}
                                        onChange={(e) =>
                                            setData("name_long", e.target.value)
                                        }
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>OD .. DO</td>
                                <td>
                                    <div className="grid">
                                        <input
                                            type="text"
                                            name="start"
                                            id="start"
                                            placeholder="početak"
                                            minLength={2}
                                            maxLength={5}
                                            onChange={(e) =>
                                                setData("start", e.target.value)
                                            }
                                            required
                                        />

                                        <input
                                            type="text"
                                            name="end"
                                            id="end"
                                            placeholder="kraj"
                                            minLength={2}
                                            maxLength={5}
                                            onChange={(e) =>
                                                setData("end", e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>DATUM</td>
                                <td>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        onChange={(e) =>
                                            setData(
                                                "date",
                                                moment(e.target.value).format(
                                                    "YYYY-MM-DD"
                                                )
                                            )
                                        }
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>DVORANA</td>
                                <td>
                                    <select
                                        name="dvorana"
                                        id="dvorana"
                                        onChange={(e) =>
                                            setData("dvorana", e.target.value)
                                        }
                                        defaultValue={0}
                                    >
                                        <option value="0">MALA DVORANA</option>
                                        <option value="1">
                                            VELIKA DVORANA
                                        </option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>VRSTA TERMINA</td>
                                <td>
                                    <select
                                        required
                                        onChange={(e) =>
                                            setData("type_id", e.target.value)
                                        }
                                        // onChange={(e) => console.log(e.target.value)}
                                    >
                                        {types.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.name_long}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>ORGANIZATOR</td>
                                <td>
                                    <Select
                                        placeholder={"Odaberi..."}
                                        isClearable
                                        options={organisersOptions}
                                        onChange={(e) =>
                                            setData("org_id", e.value)
                                        }
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>VEZANI TERMIN</td>
                                <td>
                                    <Select
                                        placeholder={"Odaberi..."}
                                        isClearable
                                        options={termsOptions}
                                        onChange={(e) =>
                                            setData("term_id", e.value)
                                        }
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>ULAZ</td>
                                <td>
                                    <div className="grid">
                                        <input
                                            type="text"
                                            name="ulaz"
                                            id="ulaz"
                                            min={2}
                                            max={5}
                                            placeholder="ulaz"
                                            onChange={(e) =>
                                                setData("entry_start", e.value)
                                            }
                                        />
                                        <input
                                            type="text"
                                            name="izlaz"
                                            id="izlaz"
                                            min={2}
                                            max={5}
                                            placeholder="izlaz"
                                            onChange={(e) =>
                                                setData("entry_end", e.value)
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>PAUZA</td>

                                <td>
                                    <input
                                        type="number"
                                        name="audience_break"
                                        id="audience_break"
                                        placeholder="min"
                                        onChange={(e) =>
                                            setData("audience_break", e.value)
                                        }
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>KONTAKT</td>
                                <td>
                                    <div className="grid">
                                        <input
                                            type="text"
                                            name="osoba"
                                            id="osoba"
                                            min={2}
                                            placeholder="osoba"
                                            onChange={(e) =>
                                                setData(
                                                    "contact_person",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <input
                                            type="text"
                                            name="tel"
                                            id="tel"
                                            min={2}
                                            placeholder="tel."
                                            onChange={(e) =>
                                                setData(
                                                    "contact_num",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>IZVOĐAČI</td>
                                <td>
                                    <textarea
                                        name="izvodaci"
                                        id="izvodaci"
                                        cols="30"
                                        rows="5"
                                        onChange={(e) =>
                                            setData("izvodaci", e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>PROGRAM</td>
                                <td>
                                    <textarea
                                        name="program"
                                        id="program"
                                        cols="30"
                                        rows="5"
                                        onChange={(e) =>
                                            setData("program", e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>RADIO-TV</td>
                                <td>
                                    <textarea
                                        name="radio"
                                        id="radio"
                                        cols="30"
                                        rows="5"
                                        onChange={(e) =>
                                            setData("radio", e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>DOMJENAK</td>
                                <td>
                                    <textarea
                                        name="domjenak"
                                        id="domjenak"
                                        cols="30"
                                        rows="5"
                                        onChange={(e) =>
                                            setData("domjenak", e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>NAPOMENE</td>
                                <td>
                                    <textarea
                                        name="extra"
                                        id="extra"
                                        cols="30"
                                        rows="5"
                                        onChange={(e) =>
                                            setData("extra", e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <details>
                                        <summary>ULAZNICE</summary>

                                        <label className="flex">
                                            BESPLATNI ULAZ
                                            <input
                                                disabled={
                                                    data.tickets_subscriber
                                                }
                                                type="checkbox"
                                                name="tickets_free"
                                                id="tickets_free"
                                                role="switch"
                                                onChange={() =>
                                                    setData(
                                                        "tickets_free",
                                                        !data.tickets_free
                                                    )
                                                }
                                            />
                                        </label>
                                        <hr />

                                        <label className="flex">
                                            PLAĆENE
                                            <input
                                                disabled={data.tickets_free}
                                                type="checkbox"
                                                name="tickets_paid"
                                                id="tickets_paid"
                                                role="switch"
                                                onClick={() =>
                                                    setData(
                                                        "tickets_paid",
                                                        !data.tickets_paid
                                                    )
                                                }
                                            />
                                        </label>
                                        <hr />
                                        <label className="flex">
                                            PRETPLATNIČKE
                                            <input
                                                disabled={data.tickets_free}
                                                type="checkbox"
                                                name="tickets_subscriber"
                                                id="tickets_subscriber"
                                                role="switch"
                                                onClick={() =>
                                                    setData(
                                                        "tickets_subscriber",
                                                        !data.tickets_subscriber
                                                    )
                                                }
                                            />
                                        </label>
                                        <hr />
                                        <label className="flex">
                                            POZIVNICE
                                            <input
                                                disabled={data.tickets_free}
                                                type="checkbox"
                                                name="tickets_invatations"
                                                id="tickets_invatations"
                                                role="switch"
                                                onClick={() =>
                                                    setData(
                                                        "tickets_invatations",
                                                        !data.tickets_invatations
                                                    )
                                                }
                                            />
                                        </label>
                                        <hr />

                                        <label className="flex">
                                            AKREDITACIJE
                                            <input
                                                disabled={data.tickets_free}
                                                type="checkbox"
                                                name="tickets_accreditation"
                                                id="tickets_accreditation"
                                                role="switch"
                                                onClick={() =>
                                                    setData(
                                                        "tickets_accreditation",
                                                        !data.tickets_accreditation
                                                    )
                                                }
                                            />
                                        </label>
                                        <hr />
                                    </details>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <details>
                                        <summary>POZORNICA</summary>
                                        DEŽURNI INSPICIJENT
                                        <input
                                            type="text"
                                            name="staige_on_duty"
                                            id="staige_on_duty"
                                            onChange={(e) =>
                                                setData(
                                                    "staige_on_duty",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        INSPICIJENT NAPOMENA
                                        <textarea
                                            name="audience_notes"
                                            id=""
                                            audience_notes
                                            cols="30"
                                            rows="6"
                                            placeholder="..."
                                            onChange={(e) =>
                                                setData(
                                                    "audience_notes",
                                                    e.target.value
                                                )
                                            }
                                        ></textarea>
                                    </details>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <details>
                                        <summary>RASVJETA</summary>
                                        DEŽURNI RASVJETA
                                        <input
                                            type="text"
                                            name="light_on_duty"
                                            id="light_on_duty"
                                            onChange={(e) =>
                                                setData(
                                                    "light_on_duty",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        RASVJETA NAPOMENA
                                        <textarea
                                            name="audience_notes"
                                            id=""
                                            audience_notes
                                            cols="30"
                                            rows="6"
                                            placeholder="..."
                                            onChange={(e) =>
                                                setData(
                                                    "audience_notes",
                                                    e.target.value
                                                )
                                            }
                                        ></textarea>
                                    </details>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={2}>
                                    <details>
                                        <summary>TONAC</summary>
                                        DEŽURNI TONAC
                                        <input
                                            type="text"
                                            name="sound_on_duty"
                                            id="sound_on_duty"
                                            onChange={(e) =>
                                                setData(
                                                    "sound_on_duty",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        TONAC NAPOMENA
                                        <textarea
                                            name="sound_notes"
                                            id="sound_notes"
                                            cols="30"
                                            rows="6"
                                            placeholder="..."
                                            onChange={(e) =>
                                                setData(
                                                    "sound_on_duty",
                                                    e.target.value
                                                )
                                            }
                                        ></textarea>
                                    </details>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <input
                        type="submit"
                        value="KREIRAJ NOVI TERMIN"
                        onClick={(e) => submit(e)}
                    />
                </form>
            </article>
        </>
    );
};
Create.layout = (page) => <Layout children={page} />;

export default Create;
