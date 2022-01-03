import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StructureDetail = (props) => {
  const { structure } = props;
  return (
    <Fragment>
      <Card sx={{ minWidth: 275, my: 1 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {structure.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {structure.description}
          </Typography>
          <Typography variant="body2" color="#618685">
            {structure.age} Age - {structure.expansion} Expansion
          </Typography>

          {Object.entries(structure.cost).map(([key, value]) => {
            return (
              <Typography sx={{ my: 1.5 }} variant="body2" color="#618685">
                {key} - {value}
              </Typography>
            );
          })}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Special Abilities</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {structure.special &&
                structure.special.map((item, index) => {
                  return <Typography key={index}>{item} - {index}</Typography>;
                })}
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Fragment>
  );
};

StructureDetail.propTypes = {
  structure: PropTypes.object,
};

export default StructureDetail;
