import classNames from "classnames";
import PropTypes from "prop-types";
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
  const handleLike = () => {
    onLike(id);
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
          <div className={styles.readBio}>
            <a href="#">Read bio</a>
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
};
