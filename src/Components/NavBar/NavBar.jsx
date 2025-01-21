import styles from "./NavBar.module.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
      <a className={styles.title} href="">
        <span className={styles.elipse}>
          <img src={getImageUrl("NavBar/EmailIcon.svg")} alt="Email Icon" />
        </span>
        <p>HMTalha@gmail.com</p>
      </a>

      <div className={styles.menu}>
        {/* Menu Button */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("NavBar/menuCloseIcon.png")
              : getImageUrl("NavBar/menuOpenIcon.png")
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
