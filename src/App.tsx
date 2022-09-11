import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainLayout from './layouts/main';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { AnimatePresence } from 'framer-motion'
import Home from './pages/home';
import About from './pages/about'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence exitBeforeEnter>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </MainLayout>
        </Router>
      </AnimatePresence>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
