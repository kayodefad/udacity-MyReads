import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import * as BooksAPI from "./BooksAPI";
import Main from "./pages/Main";
import SearchBooks from "./pages/SearchBooks";

import "react-toastify/dist/ReactToastify.css";

const BooksApp = () => {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      const currentlyReadingBooks = books.filter(
        book => book.shelf === "currentlyReading"
      );
      const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
      const readBooks = books.filter(book => book.shelf === "read");
      setCurrentlyReading(currentlyReadingBooks);
      setWantToRead(wantToReadBooks);
      setRead(readBooks);
    });
  };

  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route
          path="/search"
          render={props => <SearchBooks getAllBooks={getAllBooks} {...props} />}
        />
        <Route
          path="/"
          render={props => (
            <Main
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              getAllBooks={getAllBooks}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default BooksApp;
