import React, { Fragment, useContext, useEffect, useState } from "react";
import StructureContext from "../context/structures/structureContext";
import StructureComponent from "../components/structures/StructureDetail";
import SectionHeader from "../components/SectionHeader";
import LoaderComponent from "../components/Loader";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const StructuresPage = () => {
  const [searchText, setSearchText] = useState("");
  const structureContext = useContext(StructureContext);

  const { getStructures, structures, loading } = structureContext;

  useEffect(() => {
    getStructures();
  }, []);

  const filterStructures = () => {
    if (searchText) {
      return structures.filter((item) => {
        return item.name.indexOf(searchText) !== -1;
      });
    } else {
      return structures;
    }
  };

  return (
    <Fragment>
      <Container maxWidth="lg">
        <SectionHeader heading="Structures" />
        {loading && <LoaderComponent />}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            margin: "1rem auto",
          }}
        >
          <SearchIcon
            sx={{ color: "action.active", mr: 1, my: 0.5, cursor: "pointer" }}
            onClick={() => filterStructures()}
          />
          <TextField
            id="input-with-sx"
            label="Search.."
            variant="standard"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
          {filterStructures().map((structure) => (
            <StructureComponent key={structure.id} structure={structure} />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default StructuresPage;
