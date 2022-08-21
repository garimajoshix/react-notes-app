import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <SearchIcon className="search-icons" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
}

export default Search;
