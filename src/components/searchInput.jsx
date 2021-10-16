import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ name, value, onChange }) => {
    return (
        <div>
            <label htmlFor={name}></label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder="Search"
                className="form-control w-100"
            />
        </div>
    );
};

SearchInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchInput;
