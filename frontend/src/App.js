import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mask from "./components/Mask";
import MyMasks from "./components/MyMasks";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mask" element={<Mask />} />
        <Route path="/mymask" element={<MyMasks />} />
      </Routes>
    </div>
  );
}

export default App;
