import React, { useEffect, useState } from "react";
import SearchBooksBar from "../components/SearchBooksBar";
import SearchBooksResults from "../components/SearchBooksResults";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const SearchBooks = props => {
  const { getAllBooks } = props;
  const [searchResults, setSearchResults] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    BooksAPI.getAll().then(books => {
      setAllBooks(books);
    });
  }, []);

  const handleSearch = query => {
    if (query === "") {
      setError("");
      setSearchResults([]);
      return;
    }

    BooksAPI.search(query)
      .then(res => {
        setError("");
        const results = res.map(b => {
          const existingBook = allBooks.find(book => book.id === b.id);
          if (existingBook) {
            b.shelf = existingBook.shelf;
          } else {
            b.shelf = "none";
          }
          return b;
        });

        setSearchResults(results);
      })
      .catch(e => {
        setError("Result not found");
      });
  };

  return (
    <div className="search-books">
      <SearchBooksBar onInputChange={handleSearch} value={searchResults} />
      <SearchBooksResults
        books={searchResults}
        error={error}
        getAllBooks={getAllBooks}
      />
    </div>
  );
};

SearchBooks.propTypes = {
  getAllBooks: PropTypes.func.isRequired,
};

export default SearchBooks;
