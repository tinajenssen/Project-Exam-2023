import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../img/profile_.png";

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

import Loading from "../../../components/common/Loading.jsx";

import SearchForm from "../../../components/profiles/Search.jsx";

const action = "/profiles";
const url = API_SOCIAL_URL + action;

function GetProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchToken(url);
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

  // Call filterProfiles function when searchQuery changes
  useEffect(() => {
    const filteredProfiles = filterProfiles(profiles, searchQuery);
    setProfiles(filteredProfiles);
  }, [searchQuery]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading posts</div>;
  }

  return (
    <Container className="all-profiles">
      <Row>
        <Col md={12}>
          <SearchForm onChange={setSearchQuery} />
        </Col>
        <Col>
          {profiles.map((profile) => (
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
          ))}
        </Col>
      </Row>
    </Container>
  );
}

// Function to filter profiles based on search query
function filterProfiles(profiles, searchQuery) {
  return profiles.filter((profile) => {
    const name = profile.name.toLowerCase();
    return name.indexOf(searchQuery.toLowerCase()) !== -1;
  });
}

export default GetProfiles;
