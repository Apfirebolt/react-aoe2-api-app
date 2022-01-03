import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const FooterComponent = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            backgroundColor: "#ffef96",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" gutterBottom component="div" color="#50394c">
            Age of Empires 2 API, all rights reserved @2022
          </Typography>
        </Box>
      </Container>
    </Fragment>
  );
};

export default FooterComponent;
