import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Posts from './pages/Posts'
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer"



const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});





function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <main className="flex-column justify-flex-start min-100-vh">
          <div>
            <Routes>
            <Route
                path="/login"
                element={<Login />} />
                <Route
                path="/signup"
                element={<Signup />} />
              <Route
                path="/dashboard"
                element={<Dashboard />} />

              <Route
                path="/posts"
                element={<Posts />}
              />
              <Route
                path="*"
                element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />

        </main>

      </Router>



    </ApolloProvider>





  )
}

export default App;
