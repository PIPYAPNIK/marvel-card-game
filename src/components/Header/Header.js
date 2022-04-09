import styles from "./Header.module.css";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}></div>
          <ul className={styles.nav}>
            {MENU.map((el) => (
              <li key={el}>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
