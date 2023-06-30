import client from "../apollo-client";
import { ApolloProvider } from "@apollo/client";

if (process.env.NEXT_PUBLIC_MSW_ENABLED == "true") {
  require("../mocks");
}

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
