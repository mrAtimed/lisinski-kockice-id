import Layout from "@/Layouts/AuthenticatedLayout";
import Select from "react-select";
import { useForm } from "@inertiajs/react";

const Edit = ({ auth, terms, types, organizers, term }) => {
    const { data, setData, errors, get, processing } = useForm({
        name_long: term.name_long,
        edited_by: auth.user.id,
        org_id: term.org_id,
        term_id: term.term_id,
        type_id: term.type_id,
        date: term.date,
        start: term.start,
        end: term.end,

        stage_apart: term.stage_apart,
        stage_solo: term.stage_solo,
        stage_group: term.stage_group,

        izvodaci: term.izvodaci,
        program: term.program,
        radio: term.radio,
        domjenak: term.domjenak,
        extra: term.extra,
    });

    const termsOptions = terms.map((term) => {
        return {
            value: term.id,
            label: `${term.name_long} [#${term.id}]`,
        };
    });

    const organisersOptions = organizers.map((org) => {
        return {
            value: org.id,
            label: `${org.name_long}, #${org.id}`,
        };
    });

    const typeOptions = types.map((type) => {
        return { value: type.name_long, label: type.name_long };
    });

    return (
        <>
            <article>
                <header>KREIRAN NOVI TERMIN</header>

                <form>
                    <table role="grid">
                        <tbody>
                            <tr>
                                <td>NAZIV</td>
                                <td>
                                    <input
                                        type="text"
                                        name="name_long"
                                        id="name_long"
                                        placeholder="naziv"
                                        value={data.name_long}
                                        onChange={(e) =>
                                            setData("name_long", e.target.value)
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>TIP</td>

                                <td>
                                    <select
                                        required
                                        defaultValue={data.type_id}
                                        onChange={(e) =>
                                            setData("type_id", e.target.value)
                                        }
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
                                <td>VEZANI TERMIN</td>
                                <td>
                                    <Select
                                        placeholder={"Odaberi..."}
                                        isClearable
                                        options={termsOptions}
                                        defaultValue={
                                            termsOptions[data.term_id - 1]
                                        }
                                        select={data.term_id}
                                        onChange={(e) =>
                                            setData("term_id", e.value)
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>ORGANIZATOR</td>
                                <td>
                                    <Select
                                        placeholder={"Odaberi..."}
                                        isClearable
                                        options={organisersOptions}
                                        defaultValue={
                                            organisersOptions[data.org_id - 1]
                                        }
                                        onChange={(e) =>
                                            setData("org_id", e.value)
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>DATE</td>
                                <td>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={data.date}
                                        onChange={(e) =>
                                            setData("date", e.target.value)
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>VRIJEME</td>
                                <td>
                                    <div className="grid">
                                        <input
                                            type="text"
                                            name="start"
                                            id="start"
                                            value={data.start}
                                            onChange={(e) =>
                                                setData("start", e.target.value)
                                            }
                                        />
                                        <input
                                            type="text"
                                            name="end"
                                            id="end"
                                            value={data.end}
                                            onChange={(e) =>
                                                setData("end", e.target.value)
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>IZVODAČI</td>
                                <td>
                                    <textarea
                                        name="izvodaci"
                                        rows="6"
                                        placeholder="..."
                                        value={data.izvodaci}
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
                                        rows="6"
                                        placeholder="..."
                                        value={data.program}
                                        onChange={(e) =>
                                            setData("program", e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>MEDIJI</td>
                                <td>
                                    <textarea
                                        name="radio"
                                        rows="6"
                                        placeholder="..."
                                        value={data.radio}
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
                                        rows="6"
                                        placeholder="..."
                                        value={data.domjenak}
                                        onChange={(e) =>
                                            setData("domjenak", e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>NAPOMENA</td>
                                <td>
                                    <textarea
                                        name="extra"
                                        rows="12"
                                        placeholder="..."
                                        value={data.extra}
                                        onChange={(e) =>
                                            setData("extra", e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>APARTMAN #{data.stage_apart}</td>
                                <td>
                                    <select
                                        name="stage_apart"
                                        id="stage_apart"
                                        defaultValue={data.stage_apart}
                                        onChange={(e) =>
                                            setData(
                                                "stage_apart",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>SOLISTIČKA GARDEROBA #{data.stage_solo}</td>
                                <td>
                                    <select
                                        name="stage_solo"
                                        id="stage_solo"
                                        defaultValue={data.stage_solo}
                                        onChange={(e) =>
                                            setData(
                                                "stage_solo",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>SKUPNA GARDEROBA #{data.stage_group}</td>
                                <td>
                                    <select
                                        name="stage_group"
                                        id="stage_group"
                                        defaultValue={data.stage_group}
                                        onChange={(e) =>
                                            setData(
                                                "stage_group",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="KREIRAJ" />
                </form>
            </article>
        </>
    );
};
Edit.layout = (page) => <Layout children={page} />;
export default Edit;
