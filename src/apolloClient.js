import { ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://countries.trevorblades.com/"
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

export default apolloClient;
