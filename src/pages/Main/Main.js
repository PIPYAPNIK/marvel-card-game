import PropTypes from "prop-types";
import { CharacterList } from "../../components/CharacterList";

export const Main = ({ setActiveId }) => {
  return <CharacterList setActiveId={setActiveId} />;
};

Main.propTypes = {
  setActiveId: PropTypes.func,
};
