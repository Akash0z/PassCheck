const express = require('express');

const strengthChecker = require('../services/strengthChecker');
const calculateEntropy = require('../services/entropyChecker');
const calculateScore = require('../services/scoreChecker');
const loadFeedback = require('../utils/loadFeedback');
const genePassword = require('../services/passwordGenerator');
const passwordShuffler = require('../services/passwordShuffler');


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

exports.generatePassword = (req , res) => {
  res.render('generate' , { query: req.query });
}

exports.passwordGenerator = (req , res) => {

  let length = req.body.length;
  const uppercase = req.body.uppercase;
  const lowercase = req.body.lowercase;
  const number = req.body.number;
  const symbol = req.body.symbol;
  const excludeAmbiguous = req.body.exclude;

  //check if none of the radios are selected
  if(uppercase === undefined && lowercase === undefined && number === undefined && symbol === undefined){
    return res.redirect("/generate?error=true");
  }

  let pool = "";
  let ans = "";

  const symbols = ["!","@","#","$","%","^","&","(",")","-","_"];

  if(uppercase){
    for (let i = 65; i <= 90; i++) {
      pool += String.fromCharCode(i);
    }

    ans += 'A';
    length -= 1;
  }

  if(lowercase){
    for (let i = 97; i <= 122; i++) {
      pool += String.fromCharCode(i);
    }

    ans += 'a';
    length -= 1;
  }

  if(number){
    for (let i = 0; i <= 9; i++) {
      pool += String(i);
    }

    ans += '2';
    length -= 1;
  }

  if(symbol){
    for (let i = 0; i <= symbols.length; i++) {
      pool += symbols[i];
    }

    ans += '@';
    length -= 1;
  }

  if(excludeAmbiguous){
    pool = pool
    .replaceAll("0", "")
    .replaceAll("O", "")
    .replaceAll("1", "")
    .replaceAll("l", "")
    .replaceAll("I", "");
  }

  //generating the password
  const password = genePassword(pool , ans , length);

  const shuffledPass = passwordShuffler(password);

  //perform the checks on the generated password
  const checks = strengthChecker(password);

  const score = calculateScore(checks);
  const entropy = calculateEntropy(password);
  
  res.render('generatedResult' , {
    password: shuffledPass,
    score: score,
    entropy: entropy,
  });
}