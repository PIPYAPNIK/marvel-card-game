import { Conteiner } from "../Container";
import { Heading } from "../Heading";
import styles from "./Slider.module.css";

export const Slider = () => {
  return (
    <section className={styles.root}>
      <div className={styles.slider}>
        <Conteiner className={styles.sliderContent}>
          <Heading className={styles.header}>Wow</Heading>
          <Heading level={2} className={styles.subheader}>
            Wow.Wow.Wow
          </Heading>
          <div className={styles.call}>
            <button className={styles.button}>Wow</button>
          </div>
        </Conteiner>
      </div>
    </section>
  );
};
