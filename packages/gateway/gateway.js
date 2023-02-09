import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloGateway } from "@apollo/gateway";
import { readFileSync } from "fs";

const supergraphSdl = readFileSync("./supergraph.graphql", "utf-8");

const gateway = new ApolloGateway({
  supergraphSdl,
  debug: true,
});

const server = new ApolloServer({ gateway });

startStandaloneServer(server, { listen: { port: 4010 } }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
