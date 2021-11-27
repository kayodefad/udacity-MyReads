import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const SearchBooksResults = props => {
  const { books, error, getAllBooks } = props;

  if (error) {
    return (
      <div className="search-books-error ">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books
          .filter(b => b.hasOwnProperty("imageLinks"))
          .map(book => {
            return (
              <li key={book.id}>
                <Book book={book} getAllBooks={getAllBooks} />
              </li>
            );
          })}
      </ol>
    </div>
  );
};

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default SearchBooksResults;
