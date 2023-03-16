import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://akjgi8mbsd.execute-api.ap-southeast-2.amazonaws.com/Prod/graphql/",
  cache: new InMemoryCache(),
});

export default client;
