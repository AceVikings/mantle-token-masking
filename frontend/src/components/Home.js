import React, { useState, useEffect } from "react";
import "../styles/Home.css";
const Home = () => {
  const [header2, setHeader2] = useState({
    text: "Secure Your Metadata",
    index: 0,
  });
  let headerText = ["Secure Your Metadata", "Create Gated Content"];

  const updateHeader2Text = () => {
    setHeader2((prevText) => {
      if (prevText.text === headerText[0]) {
        return { text: "", index: 1 };
      } else if (prevText.text === headerText[1]) {
        return { text: "", index: 0 };
      } else {
        return {
          ...prevText,
          text:
            prevText.text + headerText[prevText?.index][prevText?.text?.length],
        };
      }
    });
  };

  useEffect(() => {
    updateHeader2Text();
    const interval = setInterval(updateHeader2Text, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const debugButton = () => {
    updateHeader2Text();
  };

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
      </section>
      <section className="home-beta-ticker">
        <p className="ticker-content">Beta Coming Soon! Sign up now!</p>
      </section>
      <section className="info-section">
        <h2 className="home--secondary-header">{`You Can ${header2.text}`}</h2>
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
      <button onClick={debugButton}>Debug</button>
    </div>
  );
};

export default Home;
