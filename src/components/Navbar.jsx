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
        <NavLink className="brand" to="/" aria-label="Forside">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Logo" />
          JULIE WENDELBOE BØCHER
        </NavLink>

        <nav className="site-nav" aria-label="Primær navigation">
          <NavLink to="/">PROJEKTER</NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;
