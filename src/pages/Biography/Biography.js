import PropTypes from "prop-types";

import { Heading } from "../../components/Heading";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

import { BIO } from "../../data";

import styles from "./Biography.module.scss";

export const Biography = ({ id, setActiveId }) => {
  const handleGoBack = () => setActiveId(null);

  return (
    <Container className={styles["root"]}>
      <Button onClick={handleGoBack} style="dark">
        Go back
      </Button>
      {BIO[id].map((item) => {
        if (item.type === "h1" || item.type === "h2") {
          return (
            <Heading key={item.text} level={item.type === "h1" ? 1 : 2}>
              {item.text}
            </Heading>
          );
        }

        if (item.type === "paragraph") {
          return (
            <Text key={item.text} element="p">
              {item.text}
            </Text>
          );
        }

        if (item.type === "img") {
          return <img key={item.src} src={item.src} alt={item.src} />;
        }

        return null;
      })}
    </Container>
  );
};

Biography.propTypes = {
  id: PropTypes.number.isRequired,
  setActiveId: PropTypes.func,
};
