const express = require("express");
const router = express.Router();
const {
  getToken,
  setMask,
  nameExists,
  getUser,
} = require("../controllers/maskController");

router.route("/user/:user").get(getUser);
router.route("/:project").post(setMask).get(nameExists);
router.route("/:project/:token").get(getToken);
module.exports = router;
