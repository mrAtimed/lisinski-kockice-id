export const highlightText = (text, searchText) => {
    if (!searchText) return text;
    const regex = new RegExp(`(${searchText})`, "gi");
    const parts = String(text).split(regex);
    return parts.map((part, index) => {
        return regex.test(part) ? <mark key={index}>{part}</mark> : part;
    });
};

// export const COLOR = ((item) => {
//     switch (item.type) {
//         case "Ostalo":
//             return "btn btn-gray";
//         case "Priredba":
//             return "btn btn-blue";
//         case "Rezervacija":
//             return "btn btn-orange";
//         case "Postava":
//             return "btn btn-red";
//         default:
//             return "btn btn-del";
//     }
// })();
