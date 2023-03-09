import { Route, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Homework from "./components/Homework";
import CunningPaper from "./components/CunningPaper";
import Characters from "./components/Characters";

import "./assets/style/reset.css";
import "./assets/style/loaToy.scss";
import "./assets/style/cunningPaper.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homework />} />
        <Route path="/cunningpaper/*" element={<CunningPaper />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
