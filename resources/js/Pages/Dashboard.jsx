import Layout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DashItems from "@/Components/DashItems";
import "react-calendar/dist/Calendar.css";

const Dashboard = ({ auth, vdv, mdv, meetings }) => {
    const [activeDate, setActiveDate] = useState([
        new Date().toLocaleDateString("en-GB").replaceAll("/", "-"), ///Conv. to format dd-mm-yyyy
    ]); //////Calendar date
    const [shiftMode, setShiftMode] = useState(false); ////Shift hold boolean

    const handleDates = (d) => {
        setActiveDate(d);
    }; /////Date setter

    ////////Shift key hold event listener
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Shift") {
                setShiftMode(true);
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === "Shift") {
                setShiftMode(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
    //////////

    return (
        <>
            {/* Calendar popup */}
            <div className="cal-div">
                <details className="cal-popup">
                    <summary>
                        📅‎ ‎ ‎
                        {activeDate.length > 1
                            ? `${activeDate[0]} ➜ ${activeDate[1]}`
                            : `${activeDate}`}
                    </summary>

                    <Calendar
                        className="calendar"
                        locale="hr-HR"
                        showNavigation={true}
                        onClickDay={(value) => {
                            setActiveDate(
                                value
                                    .toLocaleDateString("en-GB")
                                    .replaceAll("/", "-")
                            );
                        }}
                        selectRange={shiftMode}
                        returnValue="start"
                        onChange={(value) =>
                            handleDates(
                                Array.isArray(value)
                                    ? value.map((v) =>
                                          v
                                              .toLocaleDateString("en-GB")
                                              .replaceAll("/", "-")
                                      )
                                    : [
                                          value
                                              .toLocaleDateString("en-GB")
                                              .replaceAll("/", "-"),
                                      ]
                            )
                        }
                    />
                </details>
            </div>
            {/* Calendar popup */}

            <article>
                <details>
                    <summary>Kazalo Boja?</summary>
                    <div className="grid" style={{ gap: "0.3rem" }}>
                        <span className="red">Proba</span>
                        <span className="blue">Priredba</span>
                        <span className="orange">Rezervacija</span>
                        <span className="green">Montaža</span>
                        <span className="green">Demontaža</span>
                        <span className="gray">Pokus</span>
                        <span className="gray">Snimanje</span>
                        <span className="gray">Izložba</span>
                        <span className="gray">Press konferencija</span>
                        <span className="gray">Cocktail</span>
                    </div>
                </details>
            </article>
            <section id="dash">
                <div className="grid">
                    <article>
                        <header>
                            <div className="flex">
                                <b className="toUpperCase">velika dvorana</b>{" "}
                                [VD , FVD]
                                {/* <Link href="/dashboard">+</Link> */}
                            </div>
                        </header>
                        {vdv.data.length != 0 || "NEMA TERMINA"}

                        {vdv &&
                            vdv.data.map((item, N) => (
                                <DashItems
                                    title={`${item.name_long}`}
                                    sub={`[${item.start} - ${item.end}]`}
                                    href={"terms.show"}
                                    id={item.id}
                                    key={item.id}
                                    color={(() => {
                                        switch (item.types) {
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
                                    {item.izvodaci && (
                                        <>
                                            <hr />
                                            izvođači:
                                            <hr />
                                            {item.izvodaci}
                                        </>
                                    )}
                                    {item.program && (
                                        <>
                                            <hr></hr>
                                            program:
                                            <hr></hr>
                                            {item.program}
                                        </>
                                    )}
                                    {item.radio && (
                                        <>
                                            <hr />
                                            mediji:
                                            <hr></hr>
                                            {item.radio}
                                        </>
                                    )}
                                    {item.domjenak && (
                                        <>
                                            <hr />
                                            domjenak:
                                            <hr></hr>
                                            {item.domjenak}
                                        </>
                                    )}
                                    {item.extra && (
                                        <>
                                            <hr />
                                            ekstra:
                                            <hr></hr>
                                            {item.extra}
                                        </>
                                    )}
                                </DashItems>
                            ))}
                    </article>
                    <article>
                        <header>
                            <div className="flex">
                                <b>MALA DVORANA</b>
                                {/* <Link href="/dashboard">+</Link> */}
                            </div>
                        </header>
                        {mdv.data.length != 0 || "NEMA TERMINA"}

                        {mdv &&
                            mdv.data.map((item, N) => (
                                <DashItems
                                    title={`${item.name_long}`}
                                    sub={`[${item.start} - ${item.end}]`}
                                    href={"terms.show"}
                                    id={item.id}
                                    key={item.id}
                                    color={(() => {
                                        switch (item.types) {
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
                                    {item.izvodaci && (
                                        <>
                                            <hr />
                                            izvođači:
                                            <hr />
                                            {item.izvodaci}
                                        </>
                                    )}
                                    {item.program && (
                                        <>
                                            <hr></hr>
                                            program:
                                            <hr></hr>
                                            {item.program}
                                        </>
                                    )}
                                    {item.radio && (
                                        <>
                                            <hr />
                                            mediji:
                                            <hr></hr>
                                            {item.radio}
                                        </>
                                    )}
                                    {item.domjenak && (
                                        <>
                                            <hr />
                                            domjenak:
                                            <hr></hr>
                                            {item.domjenak}
                                        </>
                                    )}
                                    {item.extra && (
                                        <>
                                            <hr />
                                            ekstra:
                                            <hr></hr>
                                            {item.extra}
                                        </>
                                    )}
                                </DashItems>
                            ))}
                    </article>

                    <article>
                        <header>
                            <b>OSTALI PROSTORI</b>
                        </header>
                    </article>
                </div>
                <div className="grid">
                    <div id="sastanci">
                        <article>
                            <header>
                                <div className="flex">
                                    <b>SASTANCI</b>
                                    <Link
                                        href={route("meetings.create")}
                                        role="button"
                                        className="secondary"
                                    >
                                        +
                                    </Link>
                                </div>
                            </header>
                            {meetings.length != 0 || "NEMA TERMINA"}

                            {meetings &&
                                meetings.map((item) => (
                                    <DashItems
                                        key={item.id}
                                        title={`${item.name_long}`}
                                        sub={`${item.time_start} - ${item.room}`}
                                        color="btn btn-blue"
                                        href={"meetings.show"}
                                        id={item.id}
                                    >
                                        {item.notes}
                                    </DashItems>
                                ))}
                        </article>
                    </div>
                    <div>
                        <article>
                            <header className="flex">
                                <b>PARKIRALIŠTE</b>
                                <Link
                                    href={route("parkings.create")}
                                    role="button"
                                    className="contrast"
                                >
                                    +
                                </Link>
                            </header>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};
Dashboard.layout = (page) => (
    <Layout children={page} title="Dashboard" lcp={false} box={false} />
);

export default Dashboard;
