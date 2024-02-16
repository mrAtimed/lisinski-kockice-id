import Layout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

const Show = (props) => {
    const [del, setDel] = useState(false);

    function toggleDel() {
        setDel(() => !del);
    }
    const { procesing, delete: dele } = useForm();

    const delComment = (e) => {
        e.preventDefault();
        dele(route("comments.destroy", props.comment.id), {
            // onSuccess: () =>  alert('uspjeh'),
        });
    };

    return (
        <>
            <article>
                <header style={{ paddingBlock: "1rem" }}>
                    <hgroup>
                        <h3>{props.comment.name}</h3>
                        <i>{props.comment.name}</i>
                    </hgroup>
                </header>
                <section>{props.comment.notes}</section>
            </article>
        </>
    );
};

Show.layout = (page) => <Layout children={page} title="komentari" />;

export default Show;
