const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../MOCK_DATA.json");

const UserType = require("./TypeDefs/UserType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        image: { type: GraphQLString },
        adress: { type: GraphQLString },
        job: { type: GraphQLString },
        phone: { type: GraphQLString },
        ballot: { type: GraphQLInt },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          image: args.image,
          adress: args.adress,
          job: args.job,
          phone: args.phone,
          ballot: args.ballot,
          password: args.password,
        });
        return args;
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        image: { type: GraphQLString },
        adress: { type: GraphQLString },
        job: { type: GraphQLString },
        phone: { type: GraphQLString },
        ballot: { type: GraphQLInt },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        debugger;
        userData.map((a) => {
          if (a.id === args.id) {
            a.ballot = args.ballot;
          }
          return a;
        });
        console.log(args);
        debugger;
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
