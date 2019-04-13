const BoxController = require("./controllers/BoxController")
const FileController = require("./controllers/FileCOntroller");
const multerConfig = require("./config/multer");
const multer = require("multer");

const express = require("express");
const router = express.Router();

router.post("/boxes", BoxController.store );
router.post("/files",multer(multerConfig).single("file") ,FileController.store )

module.exports = router;