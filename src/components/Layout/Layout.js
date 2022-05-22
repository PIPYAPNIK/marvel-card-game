import { Outlet, useMatch } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

import styles from "./Layout.module.scss";
import { Container } from "../Container";

export const Layout = () => {
  const match = useMatch({ path: "/" });

  return (
    <div className={styles.root}>
      <Header />
      {match !== null ? (
        <Outlet />
      ) : (
        <div className={styles.wrapper}>
          <Container>
            <Outlet />
          </Container>
        </div>
      )}
      <Footer />
    </div>
  );
};
