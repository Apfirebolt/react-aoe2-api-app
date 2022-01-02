import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import StructuresPage from "./screens/Structures";
import CivilizationsPage from "./screens/Civilizations";
import TechnologiesPage from "./screens/Technologies";
import UnitsPage from "./screens/Units";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/structures" element={<StructuresPage/>} />
          <Route path="/civilizations" element={<CivilizationsPage/>} />
          <Route path="/technologies" element={<TechnologiesPage/>} />
          <Route path="/units" element={<UnitsPage/>} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
