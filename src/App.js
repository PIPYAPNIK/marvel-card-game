import { CharacterList } from "./components/CharacterList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <CharacterList />
      <Footer />
    </>
  );
};

export default App;
