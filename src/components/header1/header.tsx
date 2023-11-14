import SearchMovie from '../searchMovie/searchMovie';
import Logo from '../logo/logo';
import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <Logo />
      <SearchMovie />
    </header>
  )
}
