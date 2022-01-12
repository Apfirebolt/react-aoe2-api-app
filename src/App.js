import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import StructuresPage from "./screens/Structures";
import CivilizationsPage from "./screens/Civilizations";
import TechnologiesPage from "./screens/Technologies";
import UnitsPage from "./screens/Units";
import OneUnitPage from "./screens/OneUnit";

import CivilizationState from "./context/civilizations/civilizationState";
import StructureState from "./context/structures/structureState";
import TechnologyState from "./context/technologies/technologyState";
import UnitState from "./context/units/unitState";

function App() {
  return (
    <CivilizationState>
      <StructureState>
        <TechnologyState>
          <UnitState>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/structures" element={<StructuresPage />} />
                <Route path="/civilizations" element={<CivilizationsPage />} />
                <Route path="/technologies" element={<TechnologiesPage />} />
                <Route path="/unit/:unitId" element={<OneUnitPage />} exact />
                <Route path="/units/" element={<UnitsPage />} exact />
              </Routes>
              <Footer />
            </Router>
          </UnitState>
        </TechnologyState>
      </StructureState>
    </CivilizationState>
  );
}

export default App;
