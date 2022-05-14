import classNames from "classnames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Heading } from "../../Heading";
import { Text } from "../../Text";

import styles from "./CharacterCard.module.scss";

import { ReactComponent as Heart } from "./assets/heart.svg";

export const CharacterCard = ({
  id,
  name,
  description,
  imageUrl,
  humanName,
  isLike,
  onLike,
}) => {
  const navigate = useNavigate();

  const handleLike = () => {
    onLike && onLike(id);
  };

  const handleReadBio = () => {
    navigate(`/bio/${id}`);
  };

  return (
    <div className={styles.root}>
      <img src={imageUrl} alt={name} className={styles.cardImage} />
      <div className={styles.cardDetails}>
        <Heading level={2} className={styles.cardName}>
          {name}
        </Heading>
        <Heading level={3} className={styles.cardHumanName}>
          {humanName}
        </Heading>
        <Text element="p" className={styles.cardDescription}>
          {description}
        </Text>
        <div className={styles.cardMeta}>
          <div
            onClick={handleLike}
            className={classNames(styles.like, { [styles.active]: isLike })}
          >
            <Heart />
          </div>
          <div className={styles.readBio} onClick={handleReadBio}>
            Read bio
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  humanName: PropTypes.string,
  isLike: PropTypes.bool,
  onLike: PropTypes.func,
  onReadBio: PropTypes.func,
};
