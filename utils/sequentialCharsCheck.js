const express = require('express');

function hasSequentialChars(password){
  let i;
  for(i = 0; i<password.length-1; i++){
    const currAscii = password.charCodeAt(i);
    const nextAscii = password.charCodeAt(i+1);

    //check ascending or descending sequences
    if(currAscii + 1 === nextAscii || currAscii - 1 === nextAscii){
      return true;
    }
  }
  return false;
}



module.exports = hasSequentialChars;