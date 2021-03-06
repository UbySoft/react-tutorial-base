import React from "react";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";
import { useGlobalContext } from "./context";

const Navbar = () => {
  return (
    <nav className='nav'>
      <header className='navbar-header'>
        <div className='navbar-brand'>
          <h4>Navbar</h4>
        </div>
        <button className='btn nav-toggler'>
          <FaBars className='nav-icon' />
        </button>
      </header>

      <div className='links-container'>
        <ul className='nav-links'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='social-links'>
        <SocialBar />
      </div>
    </nav>
  );
};

export default Navbar;
