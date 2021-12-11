import React from "react";
import classes from "./CategorySidebar.module.css";
import { Link } from "react-router-dom";

const CategorySidebar: React.FC = () => {
  return (
    <div className={classes.categories}>
      <div className={classes.title}>
        <h1>Categories</h1>
      </div>
      <div className={classes.all}>
        <Link to="/webdevelopment" className={classes.link}>
          Web Development
        </Link>
        <Link to="/sports" className={classes.link}>
          Sports
        </Link>
        <Link to="/education" className={classes.link}>
          Education
        </Link>
        <Link to="/coding" className={classes.link}>
          Coding
        </Link>
        <Link to="/photography" className={classes.link}>
          Photography
        </Link>
        <Link to="/other" className={classes.link}>
          Other
        </Link>
      </div>
    </div>
  );
};

export default CategorySidebar;
