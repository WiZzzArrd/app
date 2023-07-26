import "./Header.css";
import a from "./img/logo.png";

function Header() {
  return (
    <header className='header'>
      <img className='header__img' src={a} width='150' height='80' alt='logo' />
    </header>
  );
}

export default Header;
