const express = require('express');

const strengthChecker = require('./services/strengthChecker');
const calculateEntropy = require('./services/entropyChecker');
const calculateScore = require('./services/scoreChecker');
const loadFeedback = require('./utils/loadFeedback');

const app = express();

app.use(express.urlencoded());

app.set('view engine', 'ejs');


app.get("/", (req , res , next) => {
  res.render('main');
})

app.post("/check" , (req , res , next) => {
  const password = req.body.password;

  const checks = strengthChecker(password);

  const score = calculateScore(checks);
  const entropy = calculateEntropy(password);
  const feedback = loadFeedback(checks);

  //console.log("The final answers are" , score , entropy);
  //console.log(feedback);
  

  
})



const PORT = 3000;
app.listen(PORT , (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
})