import React, { Fragment, useContext, useEffect } from "react";
import StructureContext from "../context/structures/structureContext";
import StructureComponent from "../components/structures/StructureDetail";
import SectionHeader from '../components/SectionHeader';
import LoaderComponent from '../components/Loader';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const StructuresPage = () => {
  const structureContext = useContext(StructureContext);

  const { getStructures, structures, loading } = structureContext;

  useEffect(() => {
    getStructures();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="lg">
      <SectionHeader heading="Structures" />
        {loading && (
          <LoaderComponent />
        )}
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
          {structures.map((structure) => (
            <StructureComponent key={structure.id} structure={structure} />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default StructuresPage;
