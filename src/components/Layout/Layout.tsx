import React from "react";
import { useAppSelector } from "../../store/hooks";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  return (
    <section className={classes.app}>
      <Navbar />
      <main>{children}</main>
      {isLoading ? "" : <Sidebar />}
    </section>
  );
};

export default Layout;
