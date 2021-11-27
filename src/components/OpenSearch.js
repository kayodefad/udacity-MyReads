import React from "react";
import { useHistory } from "react-router-dom";

const OpenSearch = () => {
  const history = useHistory();

  return (
    <div className="open-search">
      <button onClick={() => history.push("/search-books")}>Add a book</button>
    </div>
  );
};

export default OpenSearch;
