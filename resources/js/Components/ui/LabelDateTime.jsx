import moment from "moment/moment";

const LabelDateTime = ({ date, time }) => {
    return (
        <span>
            <kbd data-theme="dark">{moment(date).format("DD.MM.`YY")}</kbd>
        </span>
    );
};

export default LabelDateTime;
