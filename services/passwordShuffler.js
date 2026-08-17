const crypto = require('crypto');

function passwordShuffler(password) {
  for (let i = password.length - 1; i > 0; i--) {
    const j = crypto.randomInt(0, i + 1); // random index from 0 to i
    [password[i], password[j]] = [password[j], password[i]]; // swapping
  }
  return password;
}

module.exports = passwordShuffler;