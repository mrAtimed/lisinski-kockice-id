import { Link } from "@inertiajs/react";

const Paginate = ({ links, prev, next }) => {
    return (
        <div>
            <hr />
            <nav>
                <ul>
                    <li>
                        {prev && (
                            <Link href={prev}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                                    />
                                </svg>
                            </Link>
                        )}
                    </li>
                </ul>
                <ul>
                    {links &&
                        links.slice(1, links.length - 1).map((item, N) =>
                            item.label == "..." ? (
                                <li key={`paginate-${N}`}>-</li>
                            ) : (
                                <li key={`paginate-${N}`}>
                                    <Link
                                        disabled={item.active}
                                        className={
                                            item.active ? "secondary" : ""
                                        }
                                        href={item.url}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        )}
                </ul>
                <ul>
                    <li>
                        {next && (
                            <Link href={next}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Paginate;
