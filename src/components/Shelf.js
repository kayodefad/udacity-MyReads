import React from "react";
import PropTypes from "prop-types";

import BookList from "./BookList";

const Shelf = props => {
  const { shelf, getAllBooks } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <BookList shelf={shelf.data} getAllBooks={getAllBooks} />
      </div>
    </div>
  );
};

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default Shelf;
