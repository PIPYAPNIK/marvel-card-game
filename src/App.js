import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Biography } from "./pages/Biography";
import { Main } from "./pages/Main";

const App = () => {
  const [activeId, setActiveId] = useState(null);
  const handleGoBackClick = () => setActiveId(null);

  return (
    <>
      <Header />
      <Slider />
      {activeId ? (
        <Biography id={activeId} onBackClick={handleGoBackClick} />
      ) : (
        <Main setActiveId={setActiveId} />
      )}
      <Footer />
    </>
  );
};

export default App;
