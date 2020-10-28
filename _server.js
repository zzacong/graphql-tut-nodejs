const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const { type } = require('os')

const app = express()

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World',
      },
    }),
  }),
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

const PORT = process.env.PORT || 4000
app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
)
