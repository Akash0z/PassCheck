const express = require('express');

const strengthChecker = require('../services/strengthChecker');
const calculateEntropy = require('../services/entropyChecker');
const calculateScore = require('../services/scoreChecker');
const loadFeedback = require('../utils/loadFeedback');

exports.loadMain = (req , res) => {
  res.render('main');
}

exports.renderCheckFunction = (req , res) => {
  const password = req.body.password;

  const checks = strengthChecker(password);

  const score = calculateScore(checks);
  const entropy = calculateEntropy(password);
  const feedback = loadFeedback(checks);

  console.log("The final answers are" , score , entropy);
  res.render('result' , {
    score: score,
    entropy: entropy,
    feedback: feedback
  });
}