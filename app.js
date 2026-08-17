const express = require('express');

const mainRouter = require('./routes/mainRouter');

const app = express();

app.set("trust proxy", 1);

app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.use(mainRouter);

app.use((req, res) => {
  res.status(404).render("error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT , (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
})