import { Container } from "../Container";
import { Heading } from "../Heading";
import styles from "./Slider.module.scss";

export const Slider = () => {
  return (
    <section className={styles.root}>
      <div className={styles.slider}>
        <Container className={styles.sliderContent}>
          <Heading className={styles.header} backLine>
            Marvel Card Game
          </Heading>
          <Heading level={2} className={styles.subheader}>
            Wow.Wow.Wow
          </Heading>
          <div className={styles.call}>
            <button className={styles.button}>Wow</button>
          </div>
        </Container>
      </div>
    </section>
  );
};
