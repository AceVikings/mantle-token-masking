const express = require("express");
const router = express.Router();
const { getToken, setMask } = require("../controllers/maskController");
router.route("/:project/:token").get(getToken);
router.route("/:project").post(setMask);

module.exports = router;
