import styles from "./NavBar.module.css";
import menuOpenIcon from '../../assets/Home/Home/menuOpenIcon.png'
import menuCloseIcon from '../../assets/Home/Home/menuCloseIcon.png'
import EmailIcon from '../../assets/NavBar/EmailIcon.svg'
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
      <a className={styles.title} href="">
        <span className={styles.elipse}>
          <img src={EmailIcon} alt="Email Icon" />
        </span>
        <p>HMTalha@gmail.com</p>
      </a>

      <div className={styles.menu}>
        {/* Menu Button */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? menuOpenIcon
              : menuCloseIcon
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
        />

        {/* Dropdown Menu */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)} // Close menu on item click
        >
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className={styles.navButton}>Get a Quote</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
