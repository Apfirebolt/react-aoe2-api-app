import React, { Fragment, useEffect, useContext, useState } from "react";
import CivilizationContext from "../context/civilizations/civilizationContext";
import CivilizationComponent from "../components/civilizations/CivilizationDetail";
import LoaderComponent from "../components/Loader";
import SectionHeader from "../components/SectionHeader";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const CivilizationPage = () => {
  const [searchText, setSearchText] = useState(''); 
  const civilizationContext = useContext(CivilizationContext);

  const { getCivilizations, civilizations, loading } = civilizationContext;

  useEffect(() => {
    getCivilizations();
  }, []);
  
  const filterCivilizations = () => {
    if (searchText) {
      return civilizations.filter((item) => {
        return item.name.indexOf(searchText) !== -1;
      });
    } else {
      return civilizations;
    }
  };

  return (
    <Fragment>
      <Container maxWidth="lg">
        <SectionHeader heading="Civilizations" />
        {loading && <LoaderComponent />}
        <Box sx={{ bgcolor: "#cfe8fc", height: "auto", padding: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              margin: "1rem auto",
            }}
          >
            <SearchIcon
              sx={{ color: "action.active", mr: 1, my: 0.5, cursor: "pointer" }}
              onClick={() => filterCivilizations()}
            />
            <TextField
              id="input-with-sx"
              label="Search.."
              variant="standard"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Box>
          {filterCivilizations().map((civilization) => (
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
