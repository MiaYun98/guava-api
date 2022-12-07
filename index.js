const express = require('express');
const routes = require('./controllers');
// import cors
const cors = require('cors');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use cors
app.use(cors());

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  });
});