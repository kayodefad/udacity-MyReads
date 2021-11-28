import React from "react";
import PropTypes from "prop-types";

import OpenSearch from "../components/OpenSearch";
import Shelf from "../components/Shelf";

const Main = props => {
  const { currentlyReading, wantToRead, read, getAllBooks } = props;

  const shelves = [
    {
      title: "Currently Reading",
      key: "currentlyReading",
      data: currentlyReading,
    },
    { title: "Want To Read", key: "wantToRead", data: wantToRead },
    { title: "Read", key: "read", data: read },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(shelf => (
            <Shelf key={shelf.key} shelf={shelf} getAllBooks={getAllBooks} />
          ))}
        </div>
      </div>
      <OpenSearch />
    </div>
  );
};

Main.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

export default Main;
