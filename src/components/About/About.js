import { Container } from "../Container";
import { Text } from "../Text";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.root}>
      <div className={styles.about}>
        <Container className={styles.aboutContent}>
          <Text italic strong disabled>
            Italic, strong, disabled div!
          </Text>
          <Text italic strong element="span">
            Italic, strong span!
          </Text>
          <Text element="p">Default paragraph!</Text>
        </Container>
      </div>
    </section>
  );
};
