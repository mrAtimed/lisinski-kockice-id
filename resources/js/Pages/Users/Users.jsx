import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function BrowseUsers({ auth }) {
    return (
        <AuthenticatedLayout
            // header={BrowseUsers}
            title="permissions"
        >
            <article>
                <table>
                    <thead>
                        <tr>
                            <td>ROLE</td>
                            <td style={{ width: "6ch" }}></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BR</td>
                            <td>EA</td>
                            <td>DS</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </AuthenticatedLayout>
    );
}
