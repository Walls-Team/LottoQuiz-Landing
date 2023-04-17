import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              Inicio
            </span>
          </div>
          <div className="item-menu">
            <span className="navbar-link">Sorteo</span>
          </div>
          <div className="item-menu">
            <span className="navbar-link">Resultado</span>
          </div>
          <div className="item-menu">
            <span className="navbar-link">Fácil de jugar</span>
          </div>
          <div className="item-menu">
            <span className="navbar-link">Fácil de ganar</span>
          </div>
          <div className="item-menu">
            <span className="navbar-link">Testimonios</span>
          </div>
          <div className="item-menu">
            <span className="navbar-link">LottoQuiz</span>
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