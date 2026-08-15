const express = require('express');

const controller = require('../controllers/controllers');

const router = express.Router();

router.get("/", controller.loadMain);

router.post("/check" , controller.renderCheckFunction);

module.exports = router;
