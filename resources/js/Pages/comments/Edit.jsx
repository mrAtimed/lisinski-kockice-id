import Layout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const Edit = ({ auth, comment }) => {
    const { data, setData, errors, put, processing } = useForm({
        name: comment.name,
        notes: comment.notes,
        edited_by: auth.user.id,
    });

    const updateComments = (e) => {
        e.preventDefault();
        put(route("comments.update", comment.id), {
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
                <form>
                    <label htmlFor="name">
                        EDIT #{comment.id} \\\\ {auth.user.id}
                    </label>
                    <InputError msg={errors.name}></InputError>
                    <input
                        placeholder="naziv"
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <textarea
                        placeholder="tekst"
                        name="notes"
                        id="notes"
                        rows="5"
                        value={data.notes}
                        onChange={(e) => setData("notes", e.target.value)}
                    ></textarea>

                    <input
                        type="submit"
                        value="DODAJ NOVO"
                        onClick={(e) => updateComments(e)}
                    />
                </form>
            </article>
        </>
    );
};

CreEditate.layout = (page) => <Layout children={page} />;

export default Edit;
