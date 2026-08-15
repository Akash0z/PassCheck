const express = require('express');

function calculateEntropy(password){
  let poolSize = 0;
  if (/[a-z]/.test(password)) poolSize += 26;
  if (/[A-Z]/.test(password)) poolSize += 26;
  if (/[0-9]/.test(password)) poolSize += 10;
  if (/[^A-Za-z0-9]/.test(password)) poolSize += 32;

  const value = password.length * Math.log2(poolSize);

  return Math.round(value);
}


module.exports = calculateEntropy;