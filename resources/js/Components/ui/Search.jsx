import { router } from "@inertiajs/react";
import { useState } from "react";

const Search = ({ data, children }) => {
    ///Added clear search results button
    const [searchQuery, setSearchQuery] = useState(route().params.q || "");

    const handleClearAndSubmit = () => {
        setSearchQuery("");
        document.getElementById("org-form").submit();
    };

    return (
        <article>
            <hgroup>
                {route().params.q && (
                    <h4 style={{ display: "inline-block" }}>
                        Rezultati za <mark>{`"${route().params.q}"`}</mark>{" "}
                        <button
                            style={{
                                border: "none",
                                background: "none",
                                color: "red",
                                fontSize: "25px",
                                cursor: "pointer",
                            }}
                            type="submit"
                            form="org-form"
                            onClick={handleClearAndSubmit}
                        >
                            ✖
                        </button>
                    </h4>
                )}
                {route().params.q && <p>Ukupno: {data.total}</p>}
            </hgroup>
            <form id="org-form">
                <input
                    type="search"
                    name="q"
                    id="q"
                    placeholder={route().params.q || "Pretraživanje.."}
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                ></input>
            </form>
            {children && <div className="flex">{children}</div>}
        </article>
    );
};

export default Search;
