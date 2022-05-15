import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

import { ABOUT } from "../../constants/about";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <>
      <Heading className={styles.title}>About game</Heading>
      {ABOUT.map((el, index) => {
        return (
          <Text key={index} className={styles.text} element="p">
            {el}
          </Text>
        );
      })}
    </>
  );
};
