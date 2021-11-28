import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const BookList = props => {
  const { shelf, getAllBooks } = props;

  return (
    <ol className="books-grid">
      {shelf.map(book => (
        <li key={book.id}>
          <Book book={book} getAllBooks={getAllBooks} />
        </li>
      ))}
    </ol>
  );
};

BookList.propTypes = {
  shelf: PropTypes.array.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default BookList;
