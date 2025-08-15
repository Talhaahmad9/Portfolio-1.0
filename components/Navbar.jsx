import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="curtain" onClick={closeMenu}></div>}

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <button onClick={handleClick} className="mobile-nav--btn">
          &#8801;
        </button>
        <nav className={`mobile-nav--navbar ${isOpen ? "open" : ""}`}>
          <ul className="mobile-nav--nav-links">
            <li>
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}