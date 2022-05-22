import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Biography } from "./pages/Biography";
import { Characters } from "./pages/Characters";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Main } from "./pages/Main";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const cleanId = location.hash.replace(/#/g, "");
      const element = document.getElementById(cleanId);

      if (element) {
        element.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<Biography />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
