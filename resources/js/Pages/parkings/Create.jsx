import Layout from "@/Layouts/AuthenticatedLayout";

import { useForm } from "@inertiajs/react";

const Create = ({ auth }) => {
    // const { data, setData, errors, post } = useForm({
    //     created_by: auth.user.id,
    //     name_long: "",
    //     room: "",
    //     notes: "",
    //     date: "",
    //     time_start: "",
    //     time_end: "",
    // });

    // function submit(e) {
    //     e.preventDefault();
    //     post(route("meetings.store"), {
    //         preserveScroll: true,
    //     });
    // }

    return (
        <>
            <article>
                <header>
                    <b>Dodaj novo</b>
                </header>

                <input
                    type="text"
                    name="name_long"
                    id="name_long"
                    placeholder="Naziv"
                />
                <div>
                    <input
                        type="datetime-local"
                        name="date_start"
                        id="date_start"
                        placeholder="Početak"
                    />
                    <input
                        type="datetime-local"
                        name="date_start"
                        id="date_end"
                        placeholder="Kraj"
                    />
                </div>
                <textarea
                    name="notes"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="...."
                ></textarea>
                <input type="submit" value="SPREMI" disabled />
            </article>
        </>
    );
};
Create.layout = (page) => <Layout children={page} />;

export default Create;
