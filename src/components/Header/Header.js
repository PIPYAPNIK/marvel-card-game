import { useState, useEffect } from "react";
import classNames from "classnames";

import { Container } from "../Container";

import styles from "./Header.module.scss";

import logoPng from "../../assets/logo.png";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];
const SMALL_SCROLL_SIZE = 60;

export const Header = () => {
  const [isSmall, setSmall] = useState(window.scrollY > SMALL_SCROLL_SIZE);

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > SMALL_SCROLL_SIZE);

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <header className={styles.root}>
      <div
        className={classNames(styles.header, {
          [styles.small]: isSmall,
        })}
      >
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
