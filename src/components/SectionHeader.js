import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const SectionHeader = (props) => {
  const { heading } = props;  
  return (
    <Fragment>
      <Container maxWidth="lg" sx={{
            padding: "0 !important",
          }}>
        <Box
          sx={{
            padding: "1rem 0.5rem",
            display: "flex",
            backgroundColor: "#f0efef",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography variant="h6" gutterBottom component="div" color="#50394c">
            {heading}
          </Typography>
        </Box>
      </Container>
    </Fragment>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string,
};

export default SectionHeader;
