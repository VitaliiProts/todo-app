const express = require('express');
const grahpqlHTTP = require('express-graphql');
const app = express();

app.use('/graphql', grahpqlHTTP({
  
}));

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server started on port ${port}`));