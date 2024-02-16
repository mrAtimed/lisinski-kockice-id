import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";

const BtnDelete = ({ href, id, poputTitle, popupSub, children }) => {
    const [open, setOpen] = useState(false);

    const { delete: dele } = useForm();

    const delRecord = (e) => {
        e.preventDefault();
        dele(route(href, id), {
            // onSuccess: () =>  alert('uspjeh'),
        });
    };

    return (
        <>
            <button className="btn btn-del" onClick={() => setOpen(() => true)}>
                {children || (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                        {}
                    </svg>
                )}
            </button>
            <dialog open={open}>
                <article style={{ minWidth: "40ch", padding: "1rem" }}>
                    <hgroup>
                        <h2>{poputTitle || "Želite li obrisati?"}</h2>
                        <p>{popupSub || "Jeste li sigurni?"}</p>
                    </hgroup>
                    <div className="flex">
                        <button
                            className="btn"
                            onClick={() => setOpen(() => false)}
                        >
                            NATRAG
                        </button>
                        <button
                            disabled={!href && !id}
                            className="btn btn-del"
                            onClick={(e) => delRecord(e)}
                        >
                            OBRIŠI
                        </button>
                    </div>
                </article>
            </dialog>
        </>
    );
};

export default BtnDelete;
