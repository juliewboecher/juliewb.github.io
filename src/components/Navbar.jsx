import { NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (location.pathname === "/") {
      setAnimationKey((prev) => prev + 1);
    }
  }, [location.pathname]);

  return (
    <header className="site-header-box">
      <div className="site-header">
        <a className="brand" href="#hero" aria-label="Forside">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Logo" />
          JULIE WENDELBOE BØCHER
        </a>

        <nav className="site-nav" aria-label="Primær navigation">
          <a href="#projects">PROJEKTER</a>
          <a href="#about">OM MIG</a>
          <a href="#contact">KONTAKT</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
