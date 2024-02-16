import { Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { isMobile } from "react-device-detect";

import Layout from "@/Layouts/AuthenticatedLayout";

import Select from "react-select";
import moment from "moment";

import LabelDvorana from "@/Components/ui/LabelDvorana";
import BtnCreate from "@/Components/btns/BtnCreate";
import BtnDelete from "@/Components/btns/BtnDelete";
import Paginate from "@/Components/ui/Paginate";
import Tabs from "@/Components/Tabs";

const Show = ({
    auth,
    term,
    vezani,
    comments,
    org,
    users,
    id,
    services,
    termsServices,
}) => {
    const { data, setData, post, progress } = useForm({
        pdf: null,
    });

    const [popup, setPopup] = useState(false);

    const {
        data: temp,
        setData: setTemp,
        post: postServices,
        reset,
        errors,
    } = useForm({
        term_id: term.id,
        service_id: null,
        quantity: 1,
        // created_by: auth.user.id || 1,
    });

    function submit(e) {
        e.preventDefault();
        postServices(route("term.service"), {
            preserveScroll: true,
            onSuccess: reset(),
            // setTemp("quantity", null)
            // alert(
            //     `dodan je extra usluga ${temp.term_id} - ${temp.service_id} - ${temp.quantity}`
            // ),
            onError: (errors) => {
                () => console.error(errors);
            },
        });
    }

    const servicesOptions = services.map((service) => {
        return {
            value: `${service.id}`,
            label: `${service.name_long} - ${service.id}`,
        };
    });

    return (
        <>
            <article>
                <button
                    style={{ padding: "0.4rem 1rem" }}
                    className={(() => {
                        switch (term.types) {
                            case "Ostalo":
                                return "btn btn-gray";
                            case "Priredba":
                                return "btn btn-blue";
                            case "Rezervacija":
                                return "btn btn-orange";
                            case "Postava":
                                return "btn btn-red";
                            default:
                                return "btn btn-del";
                        }
                    })()}
                >
                    <div className="flex">
                        <b>{term.name_long}</b>
                        {term.type_id}
                    </div>
                </button>
                <table role="grid">
                    <tbody>
                        <tr>
                            <td>NAZIV</td>
                            <td>{term.name_long}</td>
                        </tr>

                        {term.start && (
                            <tr>
                                <td>VRIJEME</td>
                                <td> {`${term.start}-${term.end}`}</td>
                            </tr>
                        )}

                        {term.date && (
                            <tr>
                                <td>DATUM</td>
                                <td>
                                    {`${moment(term.date).format("DD.MM.`YY")}`}
                                </td>
                            </tr>
                        )}
                        {term.dvorana != null && (
                            <tr>
                                <td>DVORANA</td>
                                <td>
                                    <LabelDvorana
                                        id={term.dvorana}
                                    ></LabelDvorana>
                                </td>
                            </tr>
                        )}

                        {org.name_long && (
                            <tr>
                                <td>ORGANIZATOR</td>
                                <td>
                                    <Link
                                        href={route("organisers.show", org.id)}
                                    >
                                        {org.name_long || "blank"}
                                    </Link>
                                </td>
                            </tr>
                        )}

                        {term.entry_start && (
                            <tr>
                                <td>ULAZ</td>
                                <td>
                                    {term.entry_start}
                                    {term.entry_end && ` - ${term.entry_end}`}
                                </td>
                            </tr>
                        )}

                        {term.contact_person && (
                            <tr>
                                <td>KONTAKT OSOBA</td>
                                <td>
                                    {term.contact_person}
                                    <br></br>

                                    {isMobile && (
                                        <a href={`tel:${term.contact_num}`}>
                                            [{term.contact_num}]
                                        </a>
                                    )}

                                    {/* {term.contact_num && (
                                    )} */}
                                </td>
                            </tr>
                        )}
                        {vezani && (
                            <tr>
                                <td>VEZANI TERMIN</td>
                                <td>
                                    <Link
                                        href={route("terms.show", vezani.id)}
                                        data-tooltip={`#${vezani.id}`}
                                    >
                                        {vezani.name_long}
                                    </Link>
                                </td>
                            </tr>
                        )}

                        {term.izvodaci && (
                            <tr>
                                <td>IZVODAČI</td>
                                <td>{term.izvodaci}</td>
                            </tr>
                        )}

                        {term.program && (
                            <tr>
                                <td>PROGRAM</td>
                                <td>{term.program}</td>
                            </tr>
                        )}

                        {term.radio && (
                            <tr>
                                <td>RADIO</td>
                                <td>{term.radio}</td>
                            </tr>
                        )}
                        {term.domjenak && (
                            <tr>
                                <td>DOMJENAK</td>
                                <td>{term.domjenak}</td>
                            </tr>
                        )}
                        {term.extra && (
                            <tr>
                                <td>NAPOMENA</td>
                                <td>{term.extra}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </article>
            <article>
                <header>ODOBRENJE ULASKA</header>
                <div className="flex flex-column">
                    <div>
                        {users.length > 1 && "---"}
                        {users &&
                            users.map((item) => (
                                <li key={item.id} className="flex">
                                    <span data-tooltip={`OIB: ${item.oib}`}>
                                        {item.name}
                                    </span>
                                    <mark>{item.notes}</mark>
                                </li>
                            ))}
                    </div>
                </div>
            </article>
            {/* <article>
                <header className="flex">
                    DODATNE USLUGE
                   <Link
                        href={route("term.extraservice")}
                        className="btn"
                        // role="button"
                    >
                </header>
                {termsServices.length != 0 && (
                    <table role="grid">
                        <thead>
                            <tr>
                                <td>USLUGA</td>
                                <td style={{ width: "15ch" }}>KOLIČINA</td>
                            </tr>
                        </thead>
                        <tbody>
                            {termsServices &&
                                termsServices.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            {
                                                services[item.service_id - 1]
                                                    .name_long
                                            }
                                        </td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
                {auth.user && (
                    <footer>
                        <br></br>
                        <label>NOVA USLUGA</label>
                        <div className="grid">
                            <div>
                                <b>{errors.service_id}</b>
                                <Select
                                    placeholder={"Odaberi..."}
                                    isClearable
                                    options={servicesOptions}
                                    onChange={(e) =>
                                        setTemp("service_id", e.value)
                                    }
                                />
                            </div>
                            <div>
                                <b>{errors.quantity}</b>

                                <input
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    placeholder="količina"
                                    min={0}
                                    onChange={(e) =>
                                        setTemp("quantity", e.target.value)
                                    }
                                    max={20}
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="DODAJ USLUG"
                            onClick={(e) => submit(e)}
                        />
                    </footer>
                )}
            </article> */}
            {/* {false && (
                <article>
                    <header className="flex">
                        <b>dokumenti</b>
                        <button role="button" onClick={() => setPopup(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-file-earmark-arrow-up-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707z" />
                            </svg>
                        </button>
                    </header>
                </article>
            )} */}

            {/* <article id="comments">
                {auth.user && (
                    <header className="flex">
                        <b>DODAJ NOVI</b>
                        <button
                            role="button"
                            onClick={() =>
                                router.get(route("comments.create"), {
                                    vezani: term.id,
                                })
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1rem"
                                height="1rem"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                            </svg>
                        </button>
                    </header>
                )}
                <br />
                {comments.data.length == 0 || (
                    <>
                        {comments.data.map((comment) => (
                            <blockquote key={comment.id}>
                                <p>{comment.notes}</p>

                                <div className="flex">
                                    <i>{comment.name}</i>
                                    <kbd data-theme="dark">
                                        {moment(comment.created_at).format(
                                            "DD.MM. HH:mm"
                                        )}
                                    </kbd>
                                </div>
                            </blockquote>
                        ))}
                    </>
                )}

                <Paginate
                    links={comments.links}
                    services={termsServices}
                ></Paginate>
            </article> */}

            <br></br>
            <Tabs
                comments={comments.data}
                services={services}
                termsServices={termsServices}
                termId={term.id}
            ></Tabs>

            <dialog open={popup}>
                <article style={{ border: "2px solid green", width: "40ch" }}>
                    <header>
                        <button role="button" onClick={() => setPopup(false)}>
                            X
                        </button>
                    </header>
                    <form action="">
                        <input type="file" name="file" id="file" />
                        <input type="submit" value="UPLOAD" />
                    </form>
                </article>
            </dialog>
        </>
    );
};
Show.layout = (page) => (
    <Layout
        children={page}
        btn={
            page.props.auth.user && (
                <>
                    <li>
                        <BtnCreate href={"add"}></BtnCreate>
                    </li>
                    <li>
                        <BtnDelete
                            href={"terms.destroy"}
                            id={Number(page.props.term.id)}
                        ></BtnDelete>
                    </li>
                </>
            )
        }
    />
);

export default Show;
