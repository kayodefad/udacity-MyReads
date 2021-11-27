import React from "react";
import BookList from "./BookList";
import PropTypes from "prop-types";

const Read = props => {
  const { read, getAllBooks } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <BookList shelf={read} getAllBooks={getAllBooks} />
      </div>
    </div>
  );
};

Read.propTypes = {
  read: PropTypes.array.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default Read;
