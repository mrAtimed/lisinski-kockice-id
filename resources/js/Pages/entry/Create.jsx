import Layout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

const Create = ({ term, users }) => {
    const { data, setData, post } = useForm({
        term_id: term,
        name: "",
        oib: "",
        notes: "",
    });

    return (
        <>
            <article>
                <header>{term ? `reate entry for #${term}` : "error"}</header>
                <input
                    type="text"
                    name="name_long"
                    id="name_long"
                    placeholder="ime"
                    value={data.name}
                    onChange={(e) => {
                        setData("term_id", e.target.value);
                    }}
                />
                <input
                    type="number"
                    name="oib"
                    id="oib"
                    placeholder="oib"
                    value={data.oib}
                    onChange={(e) => {
                        setData("oib", e.target.value);
                    }}
                />
                <textarea
                    name="notes"
                    id=""
                    cols="30"
                    rows="6"
                    placeholder="napomena"
                    value={data.notes}
                    onChange={(e) => {
                        setData("notes", e.target.value);
                    }}
                ></textarea>
                <input
                    type="submit"
                    value="SPREMI"
                    disabled={data.term_id == null}
                />
            </article>
        </>
    );
};
Create.layout = (page) => <Layout children={page} />;

export default Create;
