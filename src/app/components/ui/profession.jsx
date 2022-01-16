import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getProfessionsById } from "../../store/professions";

const Profession = ({ id }) => {
    const professionsList = useSelector(getProfessionsById(id));

    if (professionsList) {
        return <p>{professionsList.name}</p>;
    } else return "Loading...";
};

Profession.propTypes = {
    id: PropTypes.string
};

export default Profession;
