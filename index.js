const {ApolloServer, gql} = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/ems';

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({port: 5000});
    })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    })
    .catch(err => {
        console.error(err);
    });