import React from "react";
import Button from "../../../UI/Button/Button";

import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <a to="/locations">Locations</a>
        </li>
        <li onClick={menuToggle}>
          <a to="/pricing">Pricing</a>
        </li>
        <li onClick={menuToggle}>
          <a to="/learnmore">Learn More</a>
        </li>
      </ul>
      <Button className={classes.booknow} outline onClick={menuToggle}>
        Book Now
      </Button>
    </nav>
  );
};

export default Nav;
