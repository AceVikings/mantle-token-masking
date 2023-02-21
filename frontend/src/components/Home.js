import React from "react";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1 className="home--header">Welcome to EzMask</h1>
      <p className="home--text">
        This is still a work in progress, come back later
      </p>
      <div className="home--box">
        <h2>How it works</h2>
        <h3>Step 1</h3>
        <p>
          Go to 'mask' tab and fill out the form to receive the generated
          masking URL
        </p>
        <h3>Step 2</h3>
        <p>
          Update the baseURI of your tokens with our generated URL to mask your
          metadata
        </p>
      </div>
    </div>
  );
};

export default Home;
