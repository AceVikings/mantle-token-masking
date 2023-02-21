const asyncHandler = require("express-async-handler");
const project = require("../models/projectURI");
const { ethers, Contract } = require("ethers");
const erc721abi = require("../abis/erc721.json");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.RPC);

const getToken = asyncHandler(async (req, res) => {
  try {
    let mask = await project.findOne({ name: req.params.project });
    let contract = new Contract(mask.contract, erc721abi, provider);
    console.log(req.params.token);
    try {
      let owner = await contract.ownerOf(req.params.token);
      let result = await fetch(
        `https://ipfs.io/ipfs/${mask.cid}/${req.params.token}`
      );

      result = await result.json();
      console.log(result);
      return res.status(200).json(result);
    } catch (err) {
      if (mask.default) return res.status(400).json(JSON.parse(mask.default));
      else return res.status(400).json({ message: "Token not minted yet" });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

const setMask = asyncHandler(async (req, res) => {
  try {
    if (req.body.default) {
      const mask = await project.create({
        name: req.params.project,
        contract: req.body.contract,
        cid: req.body.cid,
        default: req.body.default,
      });
      res.status(201).json(mask);
    } else {
      const mask = await project.create({
        name: req.params.project,
        contract: req.body.contract,
        cid: req.body.cid,
      });
      res.status(201).json(mask);
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = { getToken, setMask };
