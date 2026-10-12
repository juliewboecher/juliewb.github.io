import { Link } from "react-router";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

 useEffect(() => {
   if (location.pathname === "/" && location.hash) {
     const id = location.hash.slice(1);

     requestAnimationFrame(() => {
       document.getElementById(id)?.scrollIntoView({
         behavior: "smooth",
       });
     });
   }

   if (location.pathname === "/") {
     setAnimationKey((prev) => prev + 1);
   }
 }, [location.pathname, location.hash]);

  return (
    <header className="site-header-box">
      <div className="site-header">
        <Link className="brand" to="/" aria-label="Forside">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Logo" />

          <span className="brand-name">JULIE WENDELBOE</span>
        </Link>

        <nav className="site-nav" aria-label="Primær navigation">
          <a
            href="https://drive.google.com/file/d/13H77MkcMRVG0EkIH_1_8sY9AV0-mWy5BG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>

          <Link to="/#projects">PROJEKTER</Link>
          <Link to="/#about">OM MIG</Link>
          <Link to="/#contact">KONTAKT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
