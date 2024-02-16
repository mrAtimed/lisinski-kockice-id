import Layout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const Edit = ({ auth, service, dep }) => {
    const { data, setData, errors, put, processing } = useForm({
        name_long: service.name_long,
        name_short: service.name_short,
        notes: service.notes,
        department_id: service.department_id,
        edited_by: auth.user.id,
    });

    const updateService = (e) => {
        e.preventDefault();
        put(route("services.update", service.id));
    };

    return (
        <>
            <article>
                <header>EDIT</header>
                <form>
                    <InputError msg={errors.name_long}></InputError>
                    <input
                        placeholder="naziv"
                        type="text"
                        name="name_long"
                        id="name_long"
                        value={data.name_long}
                        onChange={(e) => setData("name_long", e.target.value)}
                    />
                    <div className="grid">
                        <div>
                            <InputError msg={errors.department_id}></InputError>

                            <select
                                name="department_id"
                                id="department_id"
                                defaultValue={service.department_id}
                                onChange={(e) =>
                                    setData("department_id", e.target.value)
                                }
                            >
                                {dep.map((item, N) => (
                                    <option
                                        key={`select=${item.id}-${N}`}
                                        value={item.id}
                                    >
                                        {item.name_long}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <InputError msg={errors.notes}></InputError>
                            <select
                                name="prostor"
                                id="prosotr"
                                tabIndex={4}
                                onChange={(e) =>
                                    setData("hall_id", e.target.value)
                                }
                            >
                                <option value="10">SVI PROSTORI</option>
                                <option value="0">OSTALI PROSTORI</option>
                                <option value="1">VELIKA DVORANA</option>
                                <option value="2">MALA DVORANA</option>
                            </select>

                            {data.hall_id == 0 && (
                                <input
                                    type="text"
                                    name="ostali"
                                    id="ostali"
                                    placeholder="koji ostali prostor"
                                    tabIndex={5}
                                    onChange={(e) =>
                                        setData("hall_notes", e.target.value)
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <InputError msg={errors.notes}></InputError>

                    <textarea
                        placeholder="napomena"
                        name="notes"
                        id="notes"
                        rows="5"
                        value={data.notes}
                        onChange={(e) => setData("notes", e.target.value)}
                    ></textarea>

                    <input
                        type="submit"
                        value="DODAJ NOVO"
                        disabled={data.department_id == "" || processing}
                        onClick={(e) => updateService(e)}
                    />
                </form>
            </article>
        </>
    );
};
Edit.layout = (page) => <Layout children={page} title="Edit" />;

export default Edit;
