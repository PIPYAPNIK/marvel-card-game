import PropTypes from "prop-types";

import { Heading } from "../../components/Heading";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

import { BIO } from "../../data";

import styles from "./Biography.module.scss";

export const Biography = ({ id, onBackClick }) => {
  return (
    <div className={styles["root"]}>
      <Container className={styles["wrapper"]}>
        <Button style="dark" onClick={onBackClick}>
          Go back
        </Button>
        {BIO[id].map((item) => {
          switch (item.type) {
            case "h1":
              return (
                <Heading level={1} key={item.text}>
                  {item.text}
                </Heading>
              );
            case "h2":
              return (
                <Heading level={2} key={item.text}>
                  {item.text}
                </Heading>
              );
            case "paragraph":
              return (
                <Text element="p" key={item.text}>
                  {item.text}
                </Text>
              );
            case "img":
              return <img key={item.src} src={item.src} alt={item.src} />;
            default:
              return null;
          }
        })}
      </Container>
    </div>
  );
};

Biography.propTypes = {
  id: PropTypes.number.isRequired,
  onBackClick: PropTypes.func,
};
