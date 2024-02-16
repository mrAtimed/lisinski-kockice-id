import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
        // header={"Profile"}
        >
            <Head title="Profile" />
            <UpdateProfileInformationForm
                mustVerifyEmail={mustVerifyEmail}
                status={status}
            />

            <hr></hr>
            <UpdatePasswordForm />
            <hr></hr>

            <DeleteUserForm />
        </AuthenticatedLayout>
    );
}
