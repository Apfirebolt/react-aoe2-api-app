import React, { Fragment, useContext, useEffect } from "react";
import StructureContext from "../context/structures/structureContext";
import StructureComponent from "../components/structures/StructureDetail";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { structureData } from "../data/structures";

const StructuresPage = () => {
  const structureContext = useContext(StructureContext);

  const { getStructures, structures } = structureContext;

  useEffect(() => {
    getStructures();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
          {structureData.map((structure) => (
            <StructureComponent key={structure.id} structure={structure} />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default StructuresPage;
