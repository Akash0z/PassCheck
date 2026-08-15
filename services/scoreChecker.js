const express = require('express');

function calculateScore(checks){
  const weights = {
    length: 2,
    hasUpper: 1,
    hasLower: 1,
    hasNumber: 1,
    hasSymbol: 1,
    noCommonPattern: 2,
    noRepeats: 1,
    noSequential: 1
  }

  let score = 0;
  for(const key in checks){
    if(checks[key]){
      score += weights[key];
    }
  }

  return score;
}

module.exports = calculateScore;