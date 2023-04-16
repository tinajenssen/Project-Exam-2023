import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";
import ProfileList from "./ProfileList.jsx";
import Search from "./SearchProfiles.jsx";
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
    <>
      <Search search={search} handleChange={handleChange} />
      <Container className="container__profiles">
        <Row>
          {!isLoading &&
            (filteredProfiles.length > 0 ? (
              filteredProfiles
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((profile) => (
                  <ProfileList key={profile.id} profile={profile} />
                ))
            ) : (
              <p className="text-center">
                There are no profiles with this name: «{search}».
              </p>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default GetProfiles;
