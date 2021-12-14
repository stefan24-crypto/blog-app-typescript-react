import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/blog-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { auth } from "../../firebase";
import { useAppSelector } from "../../store/hooks";

const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.auth.curUser);
  const navigate = useNavigate();

  const logoutHanndler = () => {
    auth.signOut();
    navigate("/");
  };

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
        {!user ? (
          <NavLink to="/login" className={classes.link}>
            Login
          </NavLink>
        ) : (
          <div className={classes.logout} onClick={logoutHanndler}>
            Logout
          </div>
        )}
        {user && (
          <NavLink className={classes.link} to="/profile">
            <img
              src={user.photoURL?.toString()}
              alt="prof_pic"
              className={classes.img}
            />
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
