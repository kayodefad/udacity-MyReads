import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FormSelect = props => {
  const { shelf, onSelect } = props;
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(shelf);
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setSelected(value);
    onSelect(value);
  };

  return (
    <select value={selected} onChange={handleChange}>
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

FormSelect.propTypes = {
  shelf: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FormSelect;
