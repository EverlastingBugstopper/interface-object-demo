import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { buildSubgraphSchema } from "@apollo/subgraph";
// comment
import { bookReviews, movieReviews } from "./shared/reviews-data.js";
import { books, movies } from "./shared/all-data.js";

let typeDefs;

try {
  typeDefs = gql(readFileSync("./reviews.graphql", { encoding: "utf-8" }));
} catch (err) {
  console.error(`Error reading schema file: ${err.message}`);
  process.exit(1);
}

const port = 4008;

const allProducts = [...books, ...movies];
const allReviews = [...bookReviews, ...movieReviews];

const resolvers = {
  Query: {
    reviews: () => allReviews,
    allReviewedProducts: () => allProducts,
  },

  Product: {
    // Reference resolver to resolve the implementation type of the abstracted objects returned by the `reviews` subgraph
    __resolveReference(reference) {
      return allProducts.find((obj) => obj.id === reference.id);
    },
    reviews: (item) => item.reviews,
  },

  Review: {
    id: (item) => item.id,
    reviewer: (item) => item.reviewer,
    content: (item) => item.content,
    rating: (item) => item.rating,
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers,
  }),
});

server
  .listen({ port: process.env.PORT || port })
  .then(({ url }) => {
    console.log(`🚀 Reviews subgraph ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
