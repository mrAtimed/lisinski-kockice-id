import "./Tabs.css";

import { Link, router } from "@inertiajs/react";

const Tabs = (props) => {
    return (
        <article>
            <div class="tabs">
                <input
                    type="radio"
                    name="tab"
                    id="tab1"
                    role="tab"
                    defaultChecked
                />
                <label htmlFor="tab1" id="tab1-label">
                    KOMENTARI
                </label>
                <section aria-labelledby="tab1-label">
                    <nav>
                        <ul>
                            <li>DODAJ KOMENTAR</li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    href={route("comments.create", {
                                        vezani: props.termId,
                                    })}
                                    class="btn secondary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-plus-square-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <table role="grid">
                        <tbody>
                            {props.comments &&
                                props.comments.map((item) => (
                                    <tr>
                                        <td>
                                            <i>{item.notes}</i>
                                            <br />
                                            <b>{item.name}</b>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </section>

                <input type="radio" name="tab" id="tab2" role="tab" />
                <label htmlFor="tab2" id="tab2-label">
                    POZORNICA
                </label>
                <section aria-labelledby="tab2-label">
                    <nav>
                        <ul>
                            <li>DODAJ USLUGU</li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    href={route("term.extraservice", {
                                        vezani: props.termId,
                                    })}
                                    class="btn secondary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-plus-square-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <table role="grid">
                        <tbody>
                            {props.termsServices &&
                                props.termsServices.map(
                                    (item) =>
                                        props.services[item.service_id - 1]
                                            .department_id == 1 && (
                                            <tr key={item.id}>
                                                <td>
                                                    {
                                                        props.services[
                                                            item.service_id - 1
                                                        ].name_long
                                                    }
                                                </td>
                                                <td>{item.quantity}</td>
                                            </tr>
                                        )
                                )}
                        </tbody>
                    </table>
                </section>

                <input type="radio" name="tab" id="tab3" role="tab" />
                <label htmlFor="tab3" id="tab3-label">
                    TON & VIDEO
                </label>
                <section aria-labelledby="tab3-label">
                    <nav>
                        <ul>
                            <li>DODAJ USLUGU</li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    href={route("term.extraservice", {
                                        vezani: props.termId,
                                    })}
                                    class="btn secondary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-plus-square-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <table role="grid">
                        <tbody>
                            {props.termsServices &&
                                props.termsServices.map(
                                    (item) =>
                                        props.services[item.service_id - 1]
                                            .department_id == 2 && (
                                            <tr key={item.id}>
                                                <td>
                                                    {
                                                        props.services[
                                                            item.service_id - 1
                                                        ].name_long
                                                    }
                                                </td>
                                                <td>{item.quantity}</td>
                                            </tr>
                                        )
                                )}
                        </tbody>
                    </table>
                </section>

                <input type="radio" name="tab" id="tab4" role="tab" />
                <label htmlFor="tab4" id="tab4-label">
                    RASVIJETA
                </label>
                <section aria-labelledby="tab4-label">
                    <nav>
                        <ul>
                            <li>DODAJ USLUGU</li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    href={route("term.extraservice", {
                                        vezani: props.termId,
                                    })}
                                    class="btn secondary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-plus-square-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <table role="grid">
                        <tbody>
                            {props.termsServices &&
                                props.termsServices.map(
                                    (item) =>
                                        props.services[item.service_id - 1]
                                            .department_id == 3 && (
                                            <tr key={item.id}>
                                                <td>
                                                    {
                                                        props.services[
                                                            item.service_id - 1
                                                        ].name_long
                                                    }
                                                </td>
                                                <td>{item.quantity}</td>
                                            </tr>
                                        )
                                )}
                        </tbody>
                    </table>
                </section>
            </div>
        </article>
    );
};

export default Tabs;
