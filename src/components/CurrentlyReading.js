import React from "react";
import PropTypes from "prop-types";

import BookList from "./BookList";

const CurrentlyReading = props => {
  const { currentlyReading, getAllBooks } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <BookList shelf={currentlyReading} getAllBooks={getAllBooks} />
      </div>
    </div>
  );
};

CurrentlyReading.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default CurrentlyReading;
