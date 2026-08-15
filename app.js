const express = require('express');

const mainRouter = require('./routes/mainRouter');

const app = express();

app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.use(mainRouter);

const PORT = 3000;
app.listen(PORT , (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
})