import React, { useState , Component } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from '../../svg/icons';
import '../css/navbar.scss';
import ButtonGame from '../elements/buttonGame';
import logo from '../../assets/images/lottoQuiz.webp';


function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const handlerLinkTo = (link) => {
    setShowMenu(false);
  }

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" onClick={() => handlerLinkTo("/")}>
            <img className="nav-logo" src={logo} alt="logo-LottoQuiz" />
          </Link>
        </div>
        <div className="right">
          <div className="item-menu">
            <span onClick={() => handlerLinkTo("/")} className="navbar-link">
            <Link to="header" smooth={true} duration={200} spy={true}>Inicio</Link>
            </span>
          </div>
          <div className="item-menu">
            <span className="navbar-link"><Link to="draw" smooth={true} duration={200} offset={160} spy={true}>Sorteo</Link></span>
          </div>
          <div className="item-menu">
            <span className="navbar-link"><Link to="result" smooth={true} duration={200} offset={-180} spy={true}>Resultado</Link></span>
          </div>
          <div className="item-menu">
            <span className="navbar-link"><Link to="easy" smooth={true} duration={200} spy={true}>Fácil de jugar</Link></span>
          </div>
          <div className="item-menu">
            <span className="navbar-link"><Link to="winner" offset={-60} smooth={true} duration={200} spy={true}>Fácil de ganar</Link></span>
          </div>
          <div className="item-menu">
            <span className="navbar-link"><Link to="testimonials" smooth={true} duration={200} spy={true}>Testimonios</Link></span>
          </div>
          <div className="item-menu">
            <span className="navbar-link"><Link to="lottoquiz" smooth={true} duration={200} spy={true}>LottoQuiz</Link></span>
          </div>
          <div className="item-menu">
            <span className="navbar-link">Terminos</span>
          </div>
          <div className="item-menu">
            <ButtonGame />
          </div>
        </div>

        {/*button for mobile*/}
        <span className="btn" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </span>
      </div>
      <div className="nav-mg"></div>

      {/*menu for mobile*/}
      <div
        className={`mobile-menu ${
          showMenu ? "mobile-menu-show" : "mobile-menu-hide"
        }`}
      >
        <div className="item-menu">
          <span onClick={() => handlerLinkTo("/")} className="mobile-menu-link">
            Inicio
          </span>
        </div>
        <div className="item-menu">
          <span className="mobile-menu-link">Sorteo</span>
        </div>
        <div className="item-menu">
          <span className="mobile-menu-link">Resultado</span>
        </div>
        <div className="item-menu">
          <span className="mobile-menu-link">Fácil de jugar</span>
        </div>
        <div className="item-menu">
          <span className="mobile-menu-link">Fácil de ganar</span>
        </div>
        <div className="item-menu">
          <span className="mobile-menu-link">Testimonios</span>
        </div>
        <div className="item-menu">
          <span className="mobile-menu-link">LottoQuiz</span>
        </div>
        <div className="item-menu">
          <ButtonGame />
        </div>
      </div>
    </>
  );
}

export default Navbar