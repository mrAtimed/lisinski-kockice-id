import Layout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const Create = ({ auth, dep }) => {
    const { data, setData, errors, post, processing } = useForm({
        name_long: "",
        name_short: "",
        notes: "",
        department_id: "",
        created_by: auth.user.id,
        hall_id: 0,
        hall_notes: 0,
    });

    const updateService = (e) => {
        e.preventDefault();
        post(route("services.store"), {
            preserveScroll: true,
            // onSuccess: () => alert('uspjeh'),
            onError: (errors) => {
                () => console.error(errors);
            },
        });
    };

    return (
        <>
            <article>
                <header>
                    <label htmlFor="name_long">DODAJ NOVO:</label>
                </header>
                <form>
                    <InputError msg={errors.name_long}></InputError>
                    <input
                        placeholder="naziv"
                        type="text"
                        name="name_long"
                        id="name_long"
                        value={data.name_long}
                        autoFocus
                        tabIndex={1}
                        onChange={(e) => setData("name_long", e.target.value)}
                    />
                    <div className="grid">
                        <InputError msg={errors.department_id}></InputError>

                        <select
                            name="department_id"
                            id="department_id"
                            defaultValue={0}
                            tabIndex={2}
                            onChange={(e) =>
                                setData("department_id", e.target.value)
                            }
                        >
                            <option value="">…</option>
                            {dep.map((item, N) => (
                                <option
                                    key={`select=${item.id}-${N}`}
                                    value={item.id}
                                    tabIndex={3}
                                >
                                    {item.name_long}
                                </option>
                            ))}
                        </select>

                        <InputError msg={errors.notes}></InputError>
                        <select
                            name="prostor"
                            id="prosotr"
                            tabIndex={4}
                            onChange={(e) => setData("hall_id", e.target.value)}
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
                    <textarea
                        placeholder="napomena"
                        name="notes"
                        id="notes"
                        tabIndex={6}
                        rows="5"
                        value={data.notes}
                        onChange={(e) => setData("notes", e.target.value)}
                    ></textarea>

                    <input
                        type="submit"
                        value="DODAJ NOVO"
                        tabIndex={7}
                        disabled={data.department_id == "" || processing}
                        onClick={(e) => updateService(e)}
                    />
                </form>
            </article>
        </>
    );
};
Create.layout = (page) => <Layout children={page} title="Services" />;

export default Create;
