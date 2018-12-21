const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');
const config = require('./config/system.json');
const port = 4000;

const app = express();
// schema - created by the developer to define the total schema of the data
// graphiql - creatse the /graphiql end point.
app.use(cors());
app.use('/graphql', graphqlHTTP({schema, graphiql:true}));

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect(config.db);
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.listen(port, ()=> {
  console.log('now listening on port ', port);
});
