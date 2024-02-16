import { useEffect } from "react";
import Layout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

import Dice from "@/Components/ui/Dice/Dice";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: true,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <Layout>
            <Head title="Log in" />

            <dialog open>
                <article style={{ width: "min(45ch, 100%)" }}>
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <Dice></Dice>
                                </li>
                                <li>
                                    <b>KOCKICE IS</b>
                                </li>
                            </ul>
                            <ul>
                                <Link
                                    href={route("dashboard")}
                                    aria-label="Close"
                                    className="close"
                                ></Link>
                            </ul>
                        </nav>
                    </header>
                    <hr />
                    <form onSubmit={submit} id="login">
                        <InputError msg={errors.email} />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            tabIndex={1}
                            autoFocus={true}
                            autoComplete="username"
                            placeholder="email"
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError msg={errors.password} />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            tabIndex={2}
                            value={data.password}
                            placeholder="****"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <button disabled={processing} className="btn">
                            PRIJAVA
                        </button>
                    </form>
                    {canResetPassword && (
                        <footer>
                            <Link href={route("password.request")}>
                                Forgot your password?
                            </Link>
                        </footer>
                    )}
                </article>
            </dialog>
        </Layout>
    );
}
