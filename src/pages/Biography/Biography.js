import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";

import { Heading } from "../../components/Heading";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

import { BIO } from "../../constants/bio";

import styles from "./Biography.module.scss";

import { ReactComponent as IconLink } from "../../assets/link.svg";

export const Biography = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const cleanId = location.hash.replace(/#/g, "");
    const element = document.getElementById(cleanId);

    if (element) {
      element.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, [location.hash]);

  if (!BIO[id]) {
    return <Navigate to="/characters" />;
  }

  return (
    <div className={styles.root}>
      <Container className={styles.wrapper}>
        <Button color="dark" onClick={handleGoBack}>
          Go back
        </Button>
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
                <div className={styles.linkWrapper} key={index}>
                  <Heading id={item.text.replace(/ /g, "_")} level={2}>
                    {item.text}
                  </Heading>
                  <Link
                    className={styles.link}
                    to={`${location.pathname}#${item.text.replace(/ /g, "_")}`}
                  >
                    <IconLink />
                  </Link>
                </div>
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
