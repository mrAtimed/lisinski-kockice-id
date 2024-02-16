import Layout from "@/Layouts/AuthenticatedLayout";
import { useForm, router } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const Create = ({ auth, vezani }) => {
    const { data, setData, errors, post, processing } = useForm({
        name: auth.user.email,
        notes: "",
        term_id: vezani || 0,
        created_by: auth.user.id,
    });

    const updateComments = (e) => {
        e.preventDefault();
        post(route("comments.store"), {
            preserveScroll: true,
            // onSuccess: () => alert('uspjeh'),
            onError: (errors) => {
                () => console.error(errors);
            },
        });
    };

    // function submit(e) {
    //     e.preventDefault();
    //     post("/users");
    // }

    return (
        <>
            <article>
                <header>
                    {vezani == null
                        ? "DODAVANJE OBAVJESTI"
                        : `DODAVANJE KOMENTARA NA TERMIN #${vezani} `}
                </header>
                <form>
                    <label htmlFor="name">
                        <div className="flex">
                            <span>DODAJ NOVI</span>
                            <small>
                                <i>-{data.name}</i>
                            </small>
                        </div>
                    </label>

                    <InputError msg={errors.term_id}></InputError>

                    <textarea
                        placeholder="tekst"
                        name="notes"
                        id="notes"
                        rows="5"
                        required
                        value={data.notes}
                        autoFocus
                        tabIndex={1}
                        onChange={(e) => setData("notes", e.target.value)}
                    ></textarea>

                    <input
                        type="submit"
                        value="SPREMI"
                        tabIndex={2}
                        onClick={(e) => updateComments(e)}
                    />
                </form>
            </article>
        </>
    );
};
Create.layout = (page) => <Layout children={page} />;

export default Create;
