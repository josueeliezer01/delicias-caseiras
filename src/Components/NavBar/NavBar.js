import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu_icon.png";

function NavBar() {
  const [sticky, setSticky] = useState(false);

  useState(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  });

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img
        src={logo}
        alt=""
        className="logo"
      />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="anounce"
            smooth={true}
            offset={0}
            duration={500}>
            INÍCIO
          </Link>
        </li>
        <li>
          <Link
            to="opcoes"
            smooth={true}
            offset={-260}
            duration={500}>
            OPÇÕES
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-135}
            duration={500}>
            SOBRE NÓS
          </Link>
        </li>
        <li>
          <Link
            to="combos"
            smooth={true}
            offset={-260}
            duration={500}>
            COMBOS
          </Link>
        </li>
        <li>
          <Link
            to="depoimentos"
            smooth={true}
            offset={-260}
            duration={500}>
            DEPOIMENTOS
          </Link>
        </li>
        <li>
          <Link
            to="contato"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn">
            CONTATO
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default NavBar;
