import App from './App.jsx';
import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Provider>
                <App />
            </Provider>
        </QueryClientProvider>
    </BrowserRouter>
  )