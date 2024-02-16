import Layout from "@/Layouts/AuthenticatedLayout";

import BtnCreate from "@/Components/btns/BtnCreate";
import IsEmpty from "@/Components/ui/IsEmpty";
import { Link } from "@inertiajs/react";

const BrowseComments = ({ auth, comments }) => {
    return (
        <>
            <IsEmpty items={comments}></IsEmpty>
            {comments.map(
                ({ id, name, notes, edited_by, created_by, term_id }) => (
                    <article key={`comments-${id}`}>
                        <header>
                            <div className="flex">
                                <i>{name}</i>
                                <kbd>{term_id}</kbd>
                            </div>
                        </header>
                        {notes}
                    </article>
                )
            )}
        </>
    );
};
BrowseComments.layout = (page) => (
    <Layout
        children={page}
        title="komentari"
        btn={
      <li>

        <BtnCreate href={"comments.create"}></BtnCreate>
      </li>  
      }
    />
);

export default BrowseComments;
