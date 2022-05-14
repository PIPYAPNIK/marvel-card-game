import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <Container className={styles["root"]}>
      <Heading className={styles["title"]}>Contacts</Heading>
      <Text className={styles["text"]} element="p">
        My name is PIPYAPNIK. I am an active front-end developer. I am 20 years
        old, single, brown eyes.
      </Text>
      <img
        className={styles["image"]}
        src="https://cdn.discordapp.com/attachments/640555610563149824/969303191952961586/unknown.png"
        alt="I am."
      />
      <Text className={styles["text"]} element="p">
        I am creating this project as a pet project. I hope something good comes
        out of this.
      </Text>
      <Text className={styles["text"]} element="p">
        You can find me in the discord by nickname:
        <Text element="span" strong>
          PIPYAPNIK#6703
        </Text>
      </Text>
    </Container>
  );
};
