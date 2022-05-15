import { CharacterList } from "../../components/CharacterList";
import { Slider } from "../../components/Slider";

import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <>
      <Slider />
      <div className={styles.cards}>
        <CharacterList />
      </div>
    </>
  );
};
