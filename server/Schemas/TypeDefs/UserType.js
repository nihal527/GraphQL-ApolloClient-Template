const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, Gr } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    image: { type: GraphQLString },
    adress: { type: GraphQLString },
    job: { type: GraphQLString },
    phone: { type: GraphQLString },
    ballot: { type: GraphQLInt },
  }),
});

module.exports = UserType;
