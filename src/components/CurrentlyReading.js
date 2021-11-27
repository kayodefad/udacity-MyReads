import React from "react";
import BookList from "./BookList";
import PropTypes from "prop-types";

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
