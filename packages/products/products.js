import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { books, movies } from "./shared/products-data.js";

let typeDefs;

try {
  typeDefs = gql(readFileSync("./products.graphql", { encoding: "utf-8" }));
} catch (err) {
  console.error(`Error reading schema file: ${err.message}`);
  process.exit(1);
}

const port = 4009;
const allProducts = [...books, ...movies];

const resolvers = {
  Query: {
    products: () => [...books, ...movies],
  },

  Product: {
    // Resolver for our Product interface, to determine which implementing object type is being returned
    __resolveType(Product) {
      if (Product.author) {
        return "Book";
      } else if (Product.director) {
        return "Movie";
      }
    },

    // Reference resolver for interface key
    __resolveReference(reference) {
      return allProducts.find((obj) => obj.id === reference.id);
    },
    id: (obj) => obj.id,
    title: (obj) => obj.title,
    price: (obj) => obj.price,
  },
  Book: {
    id: (book) => book.id,
    title: (book) => book.title,
    price: (book) => book.price,
    author: (book) => book.author,
    ISBN: (book) => book.ISBN,
  },
  Movie: {
    id: (movie) => movie.id,
    title: (movie) => movie.title,
    price: (movie) => movie.price,
    director: (movie) => movie.director,
    duration: (movie) => movie.duration,
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers,
  }),
});

server
  .listen({ port: port })
  .then(({ url }) => {
    console.log(`🚀 Reviews subgraph ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
