const express = require('express');

const app = express();

app.set('view engine', 'ejs');


app.get("/", (req , res , next) => {
  res.render('main');
})


const PORT = 3000;
app.listen(PORT , (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
})