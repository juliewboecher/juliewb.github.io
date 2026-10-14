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
        <Link
          className="brand"
          to="/"
          aria-label="Forside"
          onClick={(event) => {
            if (location.pathname === "/") {
              event.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Logo" />

          <span className="brand-name">JULIE WENDELBOE</span>
        </Link>

        <nav className="site-nav" aria-label="Primær navigation">
          <a
            href="https://drive.google.com/file/d/1QUH0yja8um6QnVNjeBn5Hk3R20AF2qc9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>

          <Link to="/projectpage">PROJEKTER</Link>
          <Link to="/about">OM MIG</Link>
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();

              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            KONTAKT
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
