const asyncHandler = require("express-async-handler");
const project = require("../models/projectURI");
const { ethers, Contract } = require("ethers");
const erc721abi = require("../abis/erc721.json");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.RPC);

const nameExists = asyncHandler(async (req, res) => {
  try {
    let mask = await project.findOne({ name: req.params.project });
    if (mask) {
      res.status(200).json({ exist: true });
    } else {
      res.status(200).json({ exist: false });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

const getToken = asyncHandler(async (req, res) => {
  try {
    let mask = await project.findOne({ name: req.params.project });
    let contract = new Contract(mask.contract, erc721abi, provider);
    try {
      let owner = await contract.ownerOf(req.params.token);
      let result = await fetch(
        `https://ipfs.io/ipfs/${mask.cid}/${req.params.token}`
      );

      result = await result.json();
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

const getUser = asyncHandler(async (req, res) => {
  try {
    const masks = await project.find({ user: req.params.user });
    res.status(200).json(masks);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
});

const setMask = asyncHandler(async (req, res) => {
  try {
    if (req.body.default) {
      const mask = await project.create({
        name: req.params.project,
        user: req.body.user,
        contract: req.body.contract,
        cid: req.body.cid,
        default: req.body.default,
      });
      res.status(201).json(mask);
    } else {
      const mask = await project.create({
        name: req.params.project,
        user: req.body.user,
        contract: req.body.contract,
        cid: req.body.cid,
      });
      res.status(201).json(mask);
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = { getToken, setMask, nameExists, getUser };
