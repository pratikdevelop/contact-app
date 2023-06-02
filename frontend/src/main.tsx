import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ErrorBoundary from './component/ErrorBoundary'

const queryClient =  new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
    <BrowserRouter>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  </ErrorBoundary>
    </QueryClientProvider>

  </React.StrictMode>,
)
