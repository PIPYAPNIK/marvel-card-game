import { Conteiner } from "../Container";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Conteiner>
        <div className={styles.footerWrap}>
          Coded with
          <span className={styles.heart}></span>
          by You
        </div>
      </Conteiner>
    </footer>
  );
};
