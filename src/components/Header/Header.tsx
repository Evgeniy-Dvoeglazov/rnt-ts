import SearchMovie from '../SearchMovie/SearchMovie';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <SearchMovie />
    </header>
  )
}

export default Header;
