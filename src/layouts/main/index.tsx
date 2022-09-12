import PageTransition from '../../components/animation/page-transition'
import { Loading } from '../../components/animation/loading';
import Header from '../../components/skeleton/header'
import Footer from '../../components/skeleton/footer'
import { ThemeProvider } from '@emotion/react'
import { useState, useEffect } from 'react';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Main } from './styles';


function MainLayout({ children }: any) {
  const [preLoader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => setPreloader(false), 2300);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {preLoader ? <Loading /> : <PageTransition>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </PageTransition>}
    </ThemeProvider>
  )
}

export default MainLayout;