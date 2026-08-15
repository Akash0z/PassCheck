const express = require('express');

function loadFeedback(checks){
  const feedback = {
    length: "Password should be at least 12 characters long.",
    hasUpper: "Add at least one uppercase letter.",
    hasLower: "Add at least one lowercase letter.",
    hasNumber: "Include at least one number.",
    hasSymbol: "Include at least one special symbol.",
    noCommonPattern: "Avoid common or easily guessed patterns.",
    noRepeats: "Avoid repeating characters like 'aaa' or '111'.",
    noSequential: "Avoid sequential characters like 'abc' or '123'."
  }

  const arr = [];
  for(const key in checks){
    if(!checks[key]){
      arr.push(feedback[key]);
    }
  }

  return arr;
}

module.exports = loadFeedback;