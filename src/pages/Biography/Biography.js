import { useParams } from "react-router-dom";

import { Heading } from "../../components/Heading";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";

import { BIO } from "../../constants/bio";

import styles from "./Biography.module.scss";

export const Biography = () => {
  const { id } = useParams();

  return (
    <div className={styles.root}>
      <Container className={styles.wrapper}>
        {BIO[id].map((item, index) => {
          switch (item.type) {
            case "h1":
              return (
                <Heading level={1} key={index}>
                  {item.text}
                </Heading>
              );
            case "h2":
              return (
                <Heading level={2} key={index}>
                  {item.text}
                </Heading>
              );
            case "paragraph":
              return (
                <Text element="p" key={index}>
                  {item.text}
                </Text>
              );
            case "img":
              return <img key={index} src={item.src} alt={item.src} />;
            default:
              return null;
          }
        })}
      </Container>
    </div>
  );
};
