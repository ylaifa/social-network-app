import React from "react";
import Post from "../components/Post";

const Home = () => {
  return (
    <>
      <h1>Welcome on My Social Network.</h1>
      <p>
        This website is a training to Redux and React. We use auth and routing
        to create a small social media website.
      </p>
      <h3>
        <Post URL="https://api-minireseausocial.mathis-dyk.fr/posts?_limit=5000&_sort=created_at:desc" />
      </h3>
    </>
  );
};

export default Home;
