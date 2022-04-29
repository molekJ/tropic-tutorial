import React from "react";
import Button from "../../../UI/Button/Button";
import { Link } from "react-router-dom";

import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <Link to="/locations">Locations</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/learnmore">Learn More</Link>
        </li>
      </ul>
      <Button
        to={"/booknow"}
        className={classes.booknow}
        outline
        onClick={menuToggle}
      >
        Book Now
      </Button>
    </nav>
  );
};

export default Nav;
