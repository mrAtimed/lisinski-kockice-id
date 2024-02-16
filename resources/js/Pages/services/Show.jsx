import Layout from "@/Layouts/AuthenticatedLayout";
import BtnDelete from "@/Components/btns/BtnDelete";
import BtnEdit from "@/Components/btns/BtnEdit";

import Select from "react-select";

import { Link } from "@inertiajs/react";

const Show = ({ service, departments }) => {
    const typeOptions = departments.map((type) => {
        return { value: type.name_long, label: type.name_long };
    });

    return (
        <>
            <article>
                <header>Prikaži</header>
                <table role="grid">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NAZIV</td>
                            <td>
                                <div className="flex">
                                    {service.name_long}
                                    {service.name_short && (
                                        <i>{` [${service.name_short}]`}</i>
                                    )}
                                </div>
                            </td>
                        </tr>
                        {service.department_id && (
                            <tr>
                                <td>ODJEL</td>
                                <td>
                                    {
                                        departments[service.department_id - 1]
                                            .name_long
                                    }
                                </td>
                            </tr>
                        )}
                        {service.notes && (
                            <tr>
                                <td>NAPOMENA</td>
                                <td>{service.notes}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* 
                <Select
                    placeholder={"Odjel..."}
                    isClearable
                    options={typeOptions}
                /> */}
            </article>
        </>
    );
};

Show.layout = (page) => (
    <Layout
        children={page}
        btn={
            <>
                <li>
                    <BtnEdit
                        href={"services.edit"}
                        id={page.props.service.id}
                    ></BtnEdit>
                </li>

                <li>
                    <BtnDelete
                        href={"services.destroy"}
                        id={page.props.service.id}
                        popupSub={`${page.props.service.name_long}`}
                    ></BtnDelete>
                </li>
            </>
        }
    />
);

export default Show;
