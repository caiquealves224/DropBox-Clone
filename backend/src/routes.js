const BoxController = require("./controllers/BoxController")
const express = require("express");
const router = express.Router();

router.post("/", BoxController.store )

module.exports = router;