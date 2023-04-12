//Search Component
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
/*
import React from "react";

const searchForm = (profiles, search) => {
  let filteredProfiles = profiles.filter((profile) => {
    return (
      profile.name.toLowerCase().startsWith(search.toLowerCase()) &&
      profile.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  return filteredProfiles;
};

export default searchForm;

/*
import React, { useState, useEffect } from "react";

function SearchForm({ url, handleChange }) {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      placeholder="Search Profiles"
      className="search__input"
      value={search}
      onChange={handleChange}
    />
  );
}

export default SearchForm;

/*
import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Col md={12} className="search">
      <input
        type="text"
        placeholder="Search Profiles"
        className="search__input"
        value={search}
        onChange={handleChange}
      />
    </Col>
  );
};

export default SearchForm;
*/
