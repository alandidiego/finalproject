
import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header"
import Profile from "./pages/Profile"
import Posts from './pages/Posts'
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


import News from "./components/News"

import Home from "./pages/home/Home";



const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});





function App() {

  return (

    <ApolloProvider client={client}>
      <Router>


        <main className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div>
            <Routes>

              <Route 

              path="/home"
              element={<Home />} />
              
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
              path="/news"
              element={<News />} 
              />

              <Route
                path="/posts"
                element={<Posts />}
              />


              <Route path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                path="*"
                element={<Dashboard />} />
              </Route>

            </Routes>
          </div>
         

        </main>

      </Router>

    </ApolloProvider>

  )
}

export default App;