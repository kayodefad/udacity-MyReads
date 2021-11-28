import React from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import * as BooksAPI from "../BooksAPI";
import FormSelect from "./FormSelect";

const Book = props => {
  const { book, getAllBooks } = props;

  const handleSelect = shelf => {
    BooksAPI.update(book, shelf).then(res => {
      toast.success(
        <div>
          Book has been added to <strong>{shelf}</strong>
        </div>
      );
      getAllBooks();
    });
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <FormSelect onSelect={handleSelect} shelf={book.shelf} />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(", ") : "Unknown Author"}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default Book;
