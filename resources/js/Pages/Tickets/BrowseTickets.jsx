import IsEmpty from "@/Components/ui/IsEmpty";
import Layout from "@/Layouts/AuthenticatedLayout";
const BrowseTickets = ({ auth, tickets }) => {
    return (
        <Layout title="nekaj drugo" btn={<li>nekaj</li>}>
            <div className="container">
                BrowseTickets
                <IsEmpty items={tickets}></IsEmpty>
                {tickets && (
                    <ol>
                        {tickets.map((item) => (
                            <li key={item.id}>{item.name_long}</li>
                        ))}
                    </ol>
                )}
            </div>
        </Layout>
    );
};

export default BrowseTickets;
