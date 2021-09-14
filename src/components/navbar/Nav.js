import React from "react";
import styles from "./style/nav.module.scss";
import SideNav from "../sidenav/SideNav";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div>Brand</div>
      <div>Nav bar to the top</div>
      <div>
        <SideNav />
      </div>
    </div>
  );
};

export default Nav;
