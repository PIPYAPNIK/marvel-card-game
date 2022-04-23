import { useState, useEffect, useCallback } from "react";
import classNames from "classnames";

import { Container } from "../Container";

import styles from "./Header.module.scss";

import logoPng from "../../assets/logo.png";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];
const SMALL_SCROLL_SIZE = 60;

export const Header = () => {
  const checkIsSmall = useCallback(
    () => window.scrollY > SMALL_SCROLL_SIZE,
    []
  );
  const [isSmall, setSmall] = useState(checkIsSmall);

  useEffect(() => {
    const onScroll = () => setSmall(checkIsSmall);

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [checkIsSmall]);

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
