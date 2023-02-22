import React, { useState, useEffect } from "react";
import "../styles/MyMasks.css";
const MyMasks = (props) => {
  const { address } = props;
  const [masks, setMasks] = useState();

  useEffect(() => {
    async function getUserProjects() {
      let response = await fetch(`http://localhost:9000/mask/user/${address}`);
      response = await response.json();
      const mask = response.map((n) => {
        return (
          <div className="detail-row">
            <p>{n.name}</p>
            <p>{`http://localhost:9000/mask/${n.name}`}</p>
            <p>{n.contract}</p>
            <p>{n.cid}</p>
          </div>
        );
      });
      setMasks(mask);
      console.log(mask);
    }
    getUserProjects();
  }, []);

  return (
    <div className="mymask">
      <h1>Dashboard</h1>
      <div className="detail-container">
        <div className="detail-row">
          <p>Project</p>
          <p>Mask</p>
          <p>Contract</p>
          <p>CID</p>
        </div>
        {masks}
      </div>
    </div>
  );
};

export default MyMasks;
