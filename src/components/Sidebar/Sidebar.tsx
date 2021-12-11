import React from "react";
import classes from "./Sidebar.module.css";
import CategorySidebar from "../Posts/CategoriesSidebar";
import RecentPosts from "../Posts/RecentPosts";

const Sidebar: React.FC = () => {
  return (
    <section className={classes.sidebar}>
      <RecentPosts />
      <CategorySidebar />
    </section>
  );
};

export default Sidebar;
