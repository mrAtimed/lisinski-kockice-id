import { Link } from "@inertiajs/react";

const DashItems = ({ color, title, sub, id, children, href }) => {
    return (
        <details>
            <summary role="button" className={color}>
                <Link href={route(href, id)} style={{ color: "white" }}>
                    {title || "..."}
                </Link>
                <hr />
                {sub}
            </summary>
            <div>{children}</div>
            <hr />
        
        </details>
    );
};

export default DashItems;
