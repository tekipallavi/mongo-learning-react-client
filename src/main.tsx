import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { BrowserRouter } from 'react-router';

//TODO: For learning react-query, remove later
import ReactQueryComponent from './components/react-query-practice/react-query-practice.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <Provider store = {store}>  
  <BrowserRouter>
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryComponent /> 
    </QueryClientProvider>
  </StrictMode>
  </BrowserRouter>
  </Provider>
)
