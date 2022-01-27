import React, { Fragment, useContext, useEffect, useState } from "react";
import TechnologyContext from "../context/technologies/technologyContext";
import TechnologyComponent from "../components/technologies/TechnologyDetail";
import SectionHeader from '../components/SectionHeader';
import LoaderComponent from '../components/Loader';
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const TechnologyPage = () => {
  const [searchText, setSearchText] = useState('');
  const technologyContext = useContext(TechnologyContext);

  const { getTechnologies, technologies, loading } = technologyContext;

  useEffect(() => {
    getTechnologies();
  }, []);

  const filterTechnologies = () => {
    if (searchText) {
      return technologies.filter((item) => {
        return item.name.indexOf(searchText) !== -1;
      });
    } else {
      return technologies;
    }
  };

  return (
    <Fragment>
      <Container maxWidth="lg">
        <SectionHeader heading="Technologies" />
        {loading && (
          <LoaderComponent />
        )}
         <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            margin: "1rem auto",
          }}
        >
          <SearchIcon
            sx={{ color: "action.active", mr: 1, my: 0.5, cursor: "pointer" }}
            onClick={() => filterTechnologies()}
          />
          <TextField
            id="input-with-sx"
            label="Search.."
            variant="standard"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
          {filterTechnologies().map((technology) => (
            <TechnologyComponent key={technology.id} technology={technology} />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default TechnologyPage;
