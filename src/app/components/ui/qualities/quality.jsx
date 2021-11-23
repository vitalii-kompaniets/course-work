import React from "react";
import PropTypes from "prop-types";
import { useQuality } from "../../../hooks/useQuality";

const Quality = ({ id }) => {
    const { getQuality } = useQuality();
    const { _id, color, name } = getQuality(id);
    return (
        <span className={"badge m-1 bg-" + color} key={_id}>
            {name}
        </span>
    );
};

Quality.propTypes = {
    id: PropTypes.string
};

export default Quality;
