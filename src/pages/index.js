
import React, { useState, useEffect } from "react";
import { Layout } from "../components/layout/";
import { SEO } from "../components/common";

const IndexPage = () => {
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.name)
      }) // set data for the number of stars
  }, []);

  return (
    <Layout>
      <SEO title="Home Page"/>
      <div className="h-screen">
        xxx<br/>
        <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
