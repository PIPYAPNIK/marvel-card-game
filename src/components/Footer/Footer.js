import { Container } from "../Container";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.footerWrap}>
          Coded with
          <span className={styles.heart}></span>
          by You
        </div>
      </Container>
    </footer>
  );
};
