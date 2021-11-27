import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBooksInput = props => {
  const { onInputChange } = props;
  const [query, setQuery] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    onInputChange(value);
    setQuery(value);
  };

  return (
    <div className="search-books-input-wrapper">
      {/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
  you don't find a specific author or title. Every search is limited by search terms.
*/}
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
};

SearchBooksInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default SearchBooksInput;
