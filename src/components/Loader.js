import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularLoader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "1rem auto" }}>
      <CircularProgress />
    </Box>
  );
};

export default CircularLoader;
