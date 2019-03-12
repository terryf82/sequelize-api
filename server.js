const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const port = 8001;

const connection = new Sequelize('db', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'db.sqlite',
  operatorsAliases: false
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection to database established');
  })
  .catch(err => {
    console.log('Unable to connect to database: ', err);
  })

app.listen(port, () => {
  console.log(`- running server on port ${port}`);
});
