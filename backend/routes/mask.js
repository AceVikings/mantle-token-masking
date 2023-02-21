const express = require("express");
const router = express.Router();
const {
  getToken,
  setMask,
  nameExists,
} = require("../controllers/maskController");

router.route("/:project/:token").get(getToken);
router.route("/:project").post(setMask).get(nameExists);
module.exports = router;
