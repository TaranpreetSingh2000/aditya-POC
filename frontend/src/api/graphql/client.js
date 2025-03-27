import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_STRAPI_URL + "/graphql",
  credentials: "same-origin",
  //   headers: {
  //     Authorization: `Bearer ${process.env.NEXT_STRAPI_BEARER_TOKEN}`,
  //   },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
