import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import "./App.css";
import Home from './pages/Home'
// import Dashboard from "./pages/dashboard";
// import Footer from "./components/Footer"



const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});





function App() {
  return (
    <body>
      <ApolloProvider client={client}>

        <main>
          <Home />
          {/* <Dashboard/> */}
        </main>



      </ApolloProvider>
    </body>




  )
}

export default App;
