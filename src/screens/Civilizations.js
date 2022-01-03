import React, { Fragment, useEffect, useContext } from "react";
import CivilizationContext from '../context/civilizations/civilizationContext';
import CivilizationComponent from '../components/civilizations/CivilizationDetail';
import SectionHeader from '../components/SectionHeader';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { civilizationData } from '../data/civilizations';

const CivilizationPage = () => {
  const civilizationContext = useContext(CivilizationContext);

  const { getCivilizations, civilizations } = civilizationContext;

  useEffect(() => {
    getCivilizations();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <SectionHeader heading="Civilizations" /> 
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
        
        {civilizationData.map(civilization => (
            <CivilizationComponent key={civilization.id} civilization={civilization} />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default CivilizationPage;
