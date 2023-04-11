import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../img/profile_.png";

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

import Loading from "../../../components/common/Loading.jsx";

const action = "/profiles";
const url = API_SOCIAL_URL + action;

function GetProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const settings = {
          method: "GET",
        };
        const response = await fetchToken(url, settings);
        const json = await response.json();
        setProfiles(json);
        console.log(json);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredProfiles = profiles.filter((profile) => {
    return (
      profile.name.toLowerCase().startsWith(search.toLowerCase()) &&
      profile.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading profiles</div>;
  }

  return (
    <Container className="all-profiles">
      <Row>
        <Col md={12} className="search">
          <input
            type="text"
            placeholder="Search Profiles"
            className="search__input"
            value={search}
            onChange={handleChange}
          />
        </Col>
        <Col>
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <div
                className="d-flex profiles"
                id={profile.id}
                data-target={profile.id}
                key={profile.id}
              >
                <div className="me-3 profile__avatar col-md-2">
                  {profile.avatar === "" || profile.avatar === null ? (
                    <Image src={DefaultImg} alt="Users avatar" />
                  ) : (
                    <Image src={profile.avatar} alt="Users avatar" />
                  )}
                </div>

                <h2 className="profile__name ps-2 col-md-8">
                  <Link to={`${profile.name}`} className="profile__link">
                    {profile.name}
                  </Link>
                </h2>
                <div className="btn--follow col-md-2">Follow</div>
              </div>
            ))
          ) : (
            <p>No matches found for "{search}".</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default GetProfiles;
