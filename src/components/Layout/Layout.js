import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
