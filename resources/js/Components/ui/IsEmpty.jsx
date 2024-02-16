const IsEmpty = ({ items, children }) => {
    return <>{items.length > 0 || <article>{children || "....."}</article>}</>;
};

export default IsEmpty;
