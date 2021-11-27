import React from "react";
import { useHistory } from "react-router-dom";
import SearchBooksInput from "./SearchBooksInput";
import PropTypes from "prop-types";

const SearchBooksBar = props => {
  const { onInputChange } = props;
  const history = useHistory();

  return (
    <div className="search-books-bar">
      <button className="close-search" onClick={() => history.push("/")}>
        Close
      </button>
      <SearchBooksInput onInputChange={onInputChange} />
    </div>
  );
};

SearchBooksBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default SearchBooksBar;
