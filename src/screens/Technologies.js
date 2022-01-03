import React, { Fragment, useContext, useEffect } from "react";
import TechnologyContext from "../context/technologies/technologyContext";
import TechnologyComponent from "../components/technologies/TechnologyDetail";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { technologyData } from "../data/technologies";

const TechnologyPage = () => {
  const technologyContext = useContext(TechnologyContext);

  const { getTechnologies, technologies } = technologyContext;

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
          {technologyData.map((technology) => (
            <TechnologyComponent key={technology.id} technology={technology} />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default TechnologyPage;
