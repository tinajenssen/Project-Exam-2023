import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Profiles"
        className="search__input mx-auto"
        value={props.search}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Search;
