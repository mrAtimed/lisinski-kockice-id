import Layout from "@/Layouts/AuthenticatedLayout";
import Select from "react-select";

import { useForm } from "@inertiajs/react";

const Create = ({ services, vezani }) => {
    const servicesOptions = services.map((service) => {
        return {
            value: `${service.id}`,
            label: `${service.name_long} - ${service.id}`,
        };
    });

    const { data, setData, errors, post } = useForm({
        service_id: "",
        term_id: vezani,
        quantity: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("term.service"), {
            preserveScroll: true,
            onSuccess: () => alert(errors),
            onError: (err) => {
                () => alert(err, errors);
            },
        });
    }

    return (
        <article>
            {console.log(errors)}
            <header>DODAVANJE USLUGE #{vezani}</header>
            <form>
                <div className="grid">
                    <Select
                        placeholder={"Odaberi..."}
                        isClearable
                        options={servicesOptions}
                        onChange={(e) => setData("service_id", e.value)}
                    />
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="količina"
                        min={0}
                        onChange={(e) => setData("quantity", e.target.value)}
                        max={20}
                    />
                </div>
                <input
                    type="submit"
                    value="DODAJ USLUG"
                    onClick={(e) => submit(e)}
                />
            </form>
        </article>
    );
};

Create.layout = (page) => <Layout children={page} />;
export default Create;
