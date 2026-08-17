const express = require('express');
const crypto = require('crypto');

function genePassword(pool , ans , length){
  while(length){

    const index = crypto.randomInt(0, pool.length); //generates a random index
    ans += pool[index];
    
    length--;
  }
  return ans;
}


module.exports = genePassword;