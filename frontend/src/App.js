import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mask from "./components/Mask";
import MyMasks from "./components/MyMasks";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
function App() {
  const [address, setAddress] = useState();
  const [signer, setSigner] = useState();
  async function requestWallet() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      setAddress(accounts[0]);

      const signerProvider = new ethers.BrowserProvider(window.ethereum);

      const signer = await signerProvider.getSigner(0);
      setSigner(signer);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    requestWallet();
  }, []);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      requestWallet();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <Navbar connectWallet={connectWallet} address={address} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mask" element={<Mask address={address} />} />
        <Route path="/dashboard" element={<MyMasks address={address} />} />
      </Routes>
    </div>
  );
}

export default App;
