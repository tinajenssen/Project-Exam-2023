import React from "react";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import GetThisPost from "../../js/api/posts/GetPost";

export default function ThisPost() {
  return (
    <>
      <Navigation />
      <GetThisPost />
      <Footer />
    </>
  );
}
