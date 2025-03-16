import App from './App.jsx';
import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "jotai";

const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
  });

  createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Provider>
                <App />
            </Provider>
        </ApolloProvider>
    </BrowserRouter>
  )