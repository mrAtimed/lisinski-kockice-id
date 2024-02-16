import { useState } from "react";
import { Link } from "@inertiajs/react";

import { highlightText } from "@/Utilities/TextHighlighter";

import Layout from "@/Layouts/AuthenticatedLayout";
import IsEmpty from "@/Components/ui/IsEmpty";
import BtnCreate from "@/Components/btns/BtnCreate";
import Search from "@/Components/ui/Search";

const Index = ({ auth, services }) => {
    const [popup, setPopup] = useState(false);

    function togglePopup() {
        setPopup(() => !popup);
    }

    return (
        <>
            <Search data={services}></Search>
            <IsEmpty items={services}>nema pronađenih usluga..</IsEmpty>
            {services.map(({ id, name_long, notes }) => (
                <article key={`services-${id}`}>
                    <header>
                        <div className="flex">
                            <Link href={route("services.show", id)}>
                                {highlightText(name_long, route().params.q)}
                            </Link>
                            <b>#{id}</b>
                        </div>
                    </header>
                    {highlightText(notes, route().params.q)}
                </article>
            ))}
        </>
    );
};
Index.layout = (page) => (
    <Layout
        children={page}
        title="usluge"
        btn={
            <li>
                <BtnCreate href={"services.create"}></BtnCreate>
            </li>
        }
    />
);

export default Index;
