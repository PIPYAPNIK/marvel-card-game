import PropTypes from "prop-types";
import { CharacterList } from "../../components/CharacterList";
import { Slider } from "../../components/Slider";

export const Main = ({ setActiveId }) => {
  return (
    <>
      <Slider />
      <CharacterList setActiveId={setActiveId} />
    </>
  );
};

Main.propTypes = {
  setActiveId: PropTypes.func,
};
