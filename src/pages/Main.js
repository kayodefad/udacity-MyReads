import React from "react";
import PropTypes from "prop-types";

import CurrentlyReading from "../components/CurrentlyReading";
import WantToRead from "../components/WantToRead";
import Read from "../components/Read";
import OpenSearch from "../components/OpenSearch";

const Main = props => {
  const { currentlyReading, wantToRead, read, getAllBooks } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading
            currentlyReading={currentlyReading}
            getAllBooks={getAllBooks}
          />
          <WantToRead wantToRead={wantToRead} getAllBooks={getAllBooks} />
          <Read read={read} getAllBooks={getAllBooks} />
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
