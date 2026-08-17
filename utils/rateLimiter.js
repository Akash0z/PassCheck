const rateLimit = require('express-rate-limit');

const checkLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).render('rate-limit-exceeded', {
      message: 'Too many generation requests from this IP. Try again in a few minutes.'
    });
  }
});

const generateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).render('rate-limit-exceeded', {
      message: 'Too many generation requests from this IP. Try again in a few minutes.'
    });
  }
});

module.exports = { checkLimiter, generateLimiter };