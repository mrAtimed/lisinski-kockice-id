// import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Head, useForm, Link } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <>
            <Head title="Forgot Password" />

            <dialog open>
                <article style={{ width: "min(45ch, 100%)" }}>
                    <header>
                        <Link
                            aria-label="Close"
                            class="close"
                            href={route("home")}
                        ></Link>
                    </header>
                    <p>
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </p>
                    <br></br>
                    {status && <div>{status}</div>}

                    <form onSubmit={submit}>
                        <InputError msg={errors.email} />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="email"
                            isfocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <button disabled={processing}>
                            Email Password Reset Link
                        </button>
                    </form>
                </article>
            </dialog>
        </>
    );
}
