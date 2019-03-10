const express = require('express');
const grahpqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

/*
  async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://abc123:abc123@ds251223.mlab.com:51223/vue_api', {
      useNewUrlParser: true,
    });

    return client.db('vue_api').collection('posts');
  }
*/

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