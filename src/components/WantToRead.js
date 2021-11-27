import React from "react";
import BookList from "./BookList";
import PropTypes from "prop-types";

const WantToRead = props => {
  const { wantToRead, getAllBooks } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want To Read</h2>
      <div className="bookshelf-books">
        <BookList shelf={wantToRead} getAllBooks={getAllBooks} />
      </div>
    </div>
  );
};

WantToRead.propTypes = {
  wantToRead: PropTypes.array.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default WantToRead;
