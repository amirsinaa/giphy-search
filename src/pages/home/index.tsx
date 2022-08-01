import PageTransition from '../../components/animation/page-transition'
import { SearchFrom } from '../../components/search/search-from'

function Home() {
  return (
    <PageTransition>
      <h1>Giphy - home</h1>
      <SearchFrom />
    </PageTransition>
  );
}

export default Home;