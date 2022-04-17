import { Container } from "../Container";
import styles from "./Header.module.scss";
import logoPng from "../../assets/logo.png";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <Container className={styles.headerContainer}>
          <div className={styles.logo}>
            <img src={logoPng} alt="Logo" />
          </div>
          <ul className={styles.nav}>
            {MENU.map((el) => (
              <li key={el}>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};
