import React, { Fragment, useContext, useEffect } from "react";
import TechnologyContext from "../context/technologies/technologyContext";
import TechnologyComponent from "../components/technologies/TechnologyDetail";
import SectionHeader from '../components/SectionHeader';
import LoaderComponent from '../components/Loader';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const TechnologyPage = () => {
  const technologyContext = useContext(TechnologyContext);

  const { getTechnologies, technologies, loading } = technologyContext;

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <SectionHeader heading="Technologies" />
        {loading && (
          <LoaderComponent />
        )}
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
          {technologies.map((technology) => (
            <TechnologyComponent key={technology.id} technology={technology} />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default TechnologyPage;
