import Header from '../../components/skeleton/header'
import Footer from '../../components/skeleton/footer'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme';
import { GlobalStyles } from './global';


function MainLayout({ children }: any) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default MainLayout;