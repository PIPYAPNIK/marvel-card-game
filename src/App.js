import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Biography } from "./pages/Biography";
import { Main } from "./pages/Main";

const App = () => {
  const [activeId, setActiveId] = useState(null);
  return (
    <>
      <Header />
      {activeId ? (
        <Biography id={activeId} setActiveId={setActiveId} />
      ) : (
        <Main setActiveId={setActiveId} />
      )}
      <Footer />
    </>
  );
};

export default App;
