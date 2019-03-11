const express = require('express');
const grahpqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://prots:qwerty123@ds163825.mlab.com:63825/gql-todo');
mongoose.connection.once('open', () => {
  console.log('connected to datebase');
});

app.use('/graphql', grahpqlHTTP({
  schema,
  graphiql: true,
}));

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server started on port ${port}`));