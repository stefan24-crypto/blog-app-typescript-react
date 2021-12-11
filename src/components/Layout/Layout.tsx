import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <section className={classes.app}>
      <Navbar />
      <main>{children}</main>
      <Sidebar />
    </section>
  );
};

export default Layout;
