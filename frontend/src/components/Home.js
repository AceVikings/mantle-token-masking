import React from "react";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1 className="home--header">Welcome to EzMask</h1>
      <p className="home--text">
        Did you know all the data uploaded to IPFS is public and can be viewed
        by anyone with the CID ? If you're using IPFS to store your metadata
        files, savvy users can see all the your NFT traits and mint out only the
        best ones. This is called "trait sniping", our tool prevents that!
      </p>
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
