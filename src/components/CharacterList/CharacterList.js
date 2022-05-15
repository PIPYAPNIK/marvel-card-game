import { useState } from "react";

import { Container } from "../Container";
import { Heading } from "../Heading";
import { CharacterCard } from "./CharacterCard";

import { CHARACTERS } from "../../constants/characters";

import styles from "./CharacterList.module.scss";

export const CharacterList = () => {
  const [characters, setCharacters] = useState(CHARACTERS);
  const handleLike = (id) => {
    setCharacters((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isLike: !item.isLike,
          };
        }

        return item;
      })
    );
  };

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.characterListTitle}>
          <Heading backLine>Marvel cards</Heading>
          <Heading level={2}>Collect your best five</Heading>
        </div>
        <div className={styles.characterList}>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              description={character.description}
              imageUrl={character.thumbnail.path}
              humanName={character.humanName}
              isLike={character.isLike}
              onLike={handleLike}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
