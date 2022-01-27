import React, { Fragment, useEffect, useContext } from "react";
import CivilizationContext from "../context/civilizations/civilizationContext";
import CivilizationComponent from "../components/civilizations/CivilizationDetail";
import LoaderComponent from "../components/Loader";
import SectionHeader from "../components/SectionHeader";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const CivilizationPage = () => {
  const civilizationContext = useContext(CivilizationContext);

  const { getCivilizations, civilizations, loading } = civilizationContext;

  useEffect(() => {
    getCivilizations();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <SectionHeader heading="Civilizations" />
        {loading && <LoaderComponent />}
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
          {civilizations.map((civilization) => (
            <CivilizationComponent
              key={civilization.id}
              civilization={civilization}
            />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default CivilizationPage;
