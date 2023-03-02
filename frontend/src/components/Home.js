import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import gated from "../images/gated.png";
const Home = () => {
  return (
    <div className="home">
      {/* <div id="invertedcursor"></div> */}
      <section className="home-main-section">
        <div className="flex-colum home-main-info">
          <h1 className="home--header">
            The Token <span className="color-mpink">Privacy</span> Platform
          </h1>
          <p className="home--sub-header">
            EzMask allows you to add privacy to your token metadata so only the
            people you want can see it.
          </p>
          <div className="home-btn-wrap flex-row">
            <div className="flex-row home-btn btn-primary">Learn more</div>
            <div className="flex-row home-btn btn-secondary">Try it</div>
          </div>
        </div>
        <img src={gated} className="home-gated" />
      </section>
      <section className="home-beta-ticker">
        <p className="ticker-content">Beta Coming Soon! Sign up now!</p>
      </section>
      <section className="info-section">
        <h2 className="home--secondary-header">Create Secure Content</h2>
      </section>
      <div className="home--box">
        <h2>How it works</h2>
        <h3>Step 1</h3>
        <p>
          Go to 'Create' tab and fill out the form to receive the generated
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
