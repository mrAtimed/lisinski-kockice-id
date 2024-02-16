import Layout from "@/Layouts/AuthenticatedLayout";
const Show = ({ auth, meeting }) => {
    return (
        <>
            <article>
                <header className="flex">
                        <i>{meeting.name_long}</i>
                        <kbd>{`#${meeting.id}`}</kbd>
                </header>
                <table role="grid">
                    <thead>
                        <tr>
                            <td style={{ width: "10ch" }}></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DATUM</td>
                            <td>{meeting.date}</td>
                        </tr>
                        <tr>
                            <td>MJESTO</td>
                            <td>{meeting.room}</td>
                        </tr>
                        <tr>
                            <td>VRIJEME</td>

                            <td>
                                {meeting.time_start && meeting.time_start}
                                {meeting.time_end && " - " + meeting.time_end}
                            </td>
                        </tr>
                        <tr>
                            <td>NAPOMENA</td>
                            <td style={{textAlign: "justify"}}>{meeting.notes}</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

Show.layout = (page) => <Layout children={page} />;

export default Show;
