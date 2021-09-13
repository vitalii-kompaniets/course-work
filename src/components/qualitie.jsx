import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ item }) => {
    return <span className={"badge m-1 bg-" + item.color}>{item.name}</span>;
};

Qualitie.propTypes = {
    item: PropTypes.object
};

export default Qualitie;
