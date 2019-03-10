const graphql = require('graphql');
const lodash = require('lodash');
const List = require('../models/list');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull } = graphql;

const ListType = new GraphQLObjectType({
  name: 'List',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    list: {
      type: ListType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return lodash.find(books, { id: args.id });
        return List.findById(args.id);
      }
    },
    lists: {
      type: new GraphQLList(ListType),
      resolve(parent, args) {
        // return books;
        return List.find({});
      }
    }
  }
});

// можливо додати id
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addList: {
      type: ListType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let list = new List({
          name: args.name,
          genre: args.genre,
        });
        return list.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});