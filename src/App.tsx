import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainLayout from './layouts/main';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home';
import { useState } from 'react';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence exitBeforeEnter>
        <MainLayout>
          <Home />
        </MainLayout>
      </AnimatePresence>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
