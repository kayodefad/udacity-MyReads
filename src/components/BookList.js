import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

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
  shelf: PropTypes.string.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default BookList;
