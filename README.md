# README

This is a demo repo for the new interfaceObject feature, available in Federation 2.3

**To run local composition:**

npm run compose

**To start all subgraph services and the gateway:**

npm start

**To install the router:**

curl -sSL https://router.apollo.dev/download/nix/latest | sh

**To run the router:**

./router -s packages/gateway/supergraph.graphql --dev , and ensure that all subgraph services have been started. I will add the router script to the package.json shortly.
