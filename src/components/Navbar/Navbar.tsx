import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/blog-logo.png";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo_div}>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <ul className={classes.links}>
        <NavLink to="/" className={classes.link}>
          <HomeIcon />
        </NavLink>
        <NavLink to="/add" className={classes.link}>
          <AddIcon />
        </NavLink>
        <NavLink to="/profile" className={classes.link}>
          <AccountCircleIcon />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
