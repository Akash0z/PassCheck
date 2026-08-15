const express = require('express');
const fs = require('fs');

function isCommonPassword(password){
  const data = fs.readFileSync('data/commonPasswords.txt', 'utf-8');

  const lines = data.split('\n').map(line => line.trim());

  const passwordSet = new Set(lines);
  //console.log(passwordSet);

  return passwordSet.has(password);
}



module.exports = isCommonPassword;