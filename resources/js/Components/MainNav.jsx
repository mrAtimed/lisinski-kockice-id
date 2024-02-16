import { usePage, Link } from "@inertiajs/react";
import NavLink from "./NavLink";
// import BtnThemeMode from "./btns/BtnThemeMode";
import Dice from "./ui/Dice/Dice";
import { Agenda, Login } from "@microsoft/mgt-react";
const MainNav = () => {
    const { auth } = usePage().props;

    const navArray = [
        { slug: "dashboard", text: "početna" },
        { slug: "terms.index", text: "termini" },
        { slug: "meetings.index", text: "sastanci" },
        { slug: "services.index", text: "usluge" },
        { slug: "organisers.index", text: "organizatori" },
        { slug: "comments.index", text: "komentari" },
    ];

    return (
        <div
            className="bg shadow"
            style={{ position: "sticky", top: "0", zIndex: "100" }}
        >
            <nav className="container" style={{paddingInline: "0rem"}}>
                <ul>
                    <li>
                        <Dice />
                    </li>
                    <li>
                        <Link href={route("dashboard")}>
                            <b>KOCKICE IS</b>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href={route("test")}>TEST</Link>
                    </li> */}
                </ul>
                <ul id="PC">
                    {auth.user &&
                        navArray.slice(1, navArray.length).map((item, N) => (
                            <li key={`nav-pc-${N}`}>
                                <NavLink
                                    href={route(`${item.slug}`)}
                                    active={route().current(item.slug)}
                                >
                                    {item.text}
                                </NavLink>
                            </li>
                        ))}

                    <li>
                        {auth.user ? (
                            ""
                        ) : (
                            <Link
                                href={route("login")}
                                role="button"
                                className="btn-blue"
                            >
                                <i
                                    style={{
                                        color: "var(--contrast-inverse)",
                                    }}
                                >
                                    PRIJAVA
                                </i>
                            </Link>
                        )}
                    </li>

                    {/* <li>
                        <BtnThemeMode />
                    </li> */}
                </ul>
                <ul id="MOB">
                    <li>
                        <details role="list" dir="rtl">
                            <summary
                                aria-haspopup="listbox"
                                role="link"
                                className="contrast"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.4rem"
                                    height="1.4rem"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                                    />
                                </svg>
                            </summary>
                            <ul role="listbox">
                                {navArray.map((item, N) => (
                                    <li key={`nav-mob-${N}`}>
                                        <NavLink
                                            href={route(item.slug)}
                                            active={route().current(item.slug)}
                                        >
                                            {item.text}
                                        </NavLink>
                                    </li>
                                ))}

                                <li>
                                    <Link
                                        method="post"
                                        href={route("logout")}
                                        className="btn secondary"
                                        as="button"
                                    >
                                        ODJAVA
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainNav;
