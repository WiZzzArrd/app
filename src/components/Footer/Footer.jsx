import logo from "./img/smile.png";
import "./Footer.css";

function Footer() {
  return (
    <marquee className='footer'>
      <p className='footer__text'>
        {/* this is a simple ToDo-list */}
        {/* <img
          className='footer__img'
          height='25'
          width='40'
          src={logo}
          alt='smile'
        /> */}
      </p>
    </marquee>
  );
}

export default Footer;
