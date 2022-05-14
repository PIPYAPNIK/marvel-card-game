import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Biography } from "./pages/Biography";
import { Characters } from "./pages/Characters";
import { Contacts } from "./pages/Contacts";
import { Main } from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="characters" element={<Characters />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="bio/:id" element={<Biography />} />
      </Route>
    </Routes>
  );
};

export default App;
