import Header from '../components/header/header';
import SearchMoviePage from '../pages/searchMoviePage';
import Footer from '../components/Footer/footer';
import './app.css';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <SearchMoviePage />
      <Footer />
    </div>
  )
}
