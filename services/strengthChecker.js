const express = require('express');
const isCommonPassword = require('../utils/loadCommonPassword');
const hasSequentialChars = require('../utils/loadCommonPassword');

function strengthChecker(password){
  
  const checks = {
    length: password.length >= 12,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSymbol: /[^A-Za-z0-9]/.test(password),
    noCommonPattern: !isCommonPassword(password), //checks against the bad list
    noRepeats: !/(.)\1{2,}/.test(password), //no repeats 
    noSequential: !hasSequentialChars(password) //no sequential characters
  }

  return checks;
  
}



module.exports = strengthChecker;