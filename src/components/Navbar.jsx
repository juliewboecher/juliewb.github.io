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

          <span className="brand-name">JULIE WENDELBOE</span>
        </a>

        <nav className="site-nav" aria-label="Primær navigation">
          <a
            href="https://drive.google.com/file/d/13H77MkcMRVG0EkIH1_8sY9AV0-mWy5BG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>

          <a href="#projects">PROJEKTER</a>
          <a href="#about">OM MIG</a>
          <a href="#contact">KONTAKT</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
