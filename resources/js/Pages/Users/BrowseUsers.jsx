import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function BrowseUsers({ auth, users }) {
    return (
        <AuthenticatedLayout title="Browse Users">
            {users &&
                users.map((item) => (
                    <article className="bg" key={`user-perm-${item.id}`}>
                        <hgroup>
                            <h3>{item.name}</h3>
                            <p>{item.email}</p>
                        </hgroup>
                        <Link href={route("user.edit")}>edit</Link>
                    </article>
                ))}
        </AuthenticatedLayout>
    );
}
