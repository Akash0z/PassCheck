const express = require('express');
const {checkLimiter , generateLimiter} = require('../utils/rateLimiter');

const controller = require('../controllers/controllers');

const router = express.Router();

router.get("/", controller.loadMain);

router.post("/check" , checkLimiter , controller.renderCheckFunction);

router.get("/generate" , generateLimiter , controller.generatePassword);

router.post("/generate-password" , generateLimiter , controller.passwordGenerator);

module.exports = router;
