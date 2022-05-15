import { useState, useEffect } from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "../Container";

import styles from "./Header.module.scss";

import logoPng from "../../assets/logo.png";

const MENU = [
  { name: "Main", url: "/" },
  { name: "Characters", url: "/characters" },
  { name: "About Game", url: "/about" },
  { name: "Contacts", url: "/contacts" },
];
const SMALL_SCROLL_SIZE = 60;

export const Header = () => {
  const navigate = useNavigate();
  const [isSmall, setSmall] = useState(window.scrollY > SMALL_SCROLL_SIZE);

  const handleLogoClick = () => {
    navigate("/");
  };

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
          <div className={styles.logo} onClick={handleLogoClick}>
            <img src={logoPng} alt="Logo" />
          </div>
          <ul className={styles.nav}>
            {MENU.map(({ name, url }) => (
              <li key={name}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};
