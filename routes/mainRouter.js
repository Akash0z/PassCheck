const express = require('express');

const controller = require('../controllers/controllers');

const router = express.Router();

router.get("/", controller.loadMain);

router.post("/check" , controller.renderCheckFunction);

router.get("/generate" , controller.generatePassword);

router.post("/generate-password" , controller.passwordGenerator);

module.exports = router;
