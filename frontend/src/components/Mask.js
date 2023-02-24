import React, { useState } from "react";
import "../styles/Mask.css";
import "../styles/Tooltip.css";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
const Mask = (props) => {
  const { address } = props;
  const [form, setForm] = useState({
    name: "",
    contract: "",
    cid: "",
    default: "",
    isGate: false,
  });
  const [maskURL, setMask] = useState();
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(form);
  };

  const handleSubmit = async () => {
    if (!address) {
      toast.error("Metamask not connected", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (!ethers.isAddress(form.contract)) {
      toast.error("Invalid Address", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    let result = await fetch(`http://localhost:9000/mask/${form.name}`);
    result = await result.json();
    console.log(result);
    if (result.exist) {
      toast.error("Name Exists", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    let response = await fetch(`http://localhost:9000/mask/${form.name}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: address,
        contract: form.contract,
        cid: form.cid,
        default: form.default,
      }),
    });

    if (response.status === 201 || response.status === 200) {
      toast.success("Mask Generated!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setMask(`http://localhost:9000/mask/${form.name}`);
    } else {
      toast.error("Mask Generation Failed!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
  };
  return (
    <div className="mask">
      <h1 className="tooltip">Create Mask</h1>
      <ToastContainer />
      <form className="form">
        <label className="form-row" htmlFor="name">
          Project Name
          <input
            name="name"
            placeholder="ezTools"
            onChange={handleChange}
            value={form.name}
          ></input>
        </label>
        <label className="form-row" htmlFor="contract">
          Contract
          <input
            name="contract"
            placeholder="0x"
            onChange={handleChange}
            value={form.contract}
          ></input>
        </label>
        <label className="form-row" htmlFor="cid">
          CID
          <input
            name="cid"
            placeholder="qCwasdnNasUwMasKasddNAnasA"
            onChange={handleChange}
            value={form.cid}
          ></input>
        </label>
        <label className="form-row" htmlFor="default">
          Default
          <input
            name="default"
            placeholder='{"message":"Nothing here"}'
            onChange={handleChange}
            value={form.default}
          ></input>
        </label>
        <div className="checkbox-group tooltip">
          <input
            type="checkbox"
            name="isGate"
            id="isGate"
            checked={form.isGate}
            onChange={handleChange}
          ></input>
          <label htmlFor="isGate">Add Gating ?</label>
          <AiOutlineInfoCircle className="info" />
          <div class="right">
            <h3>Gating vs Masking</h3>
            <p>
              Gating adds an additional check to metadata reveal, wherein the
              user must verify to be the valid owner of the token to reveal the
              metadata
            </p>
            <i></i>
          </div>
        </div>
      </form>
      <div className="form-button" onClick={handleSubmit}>
        Submit
      </div>
      {maskURL && <h3>{maskURL}</h3>}
    </div>
  );
};

export default Mask;
