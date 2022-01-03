import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CivilizationDetail = (props) => {
  const { civilization } = props;
  
  return (
    <Fragment>
      <Card sx={{ minWidth: 275, my: 1 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {civilization.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {civilization.description}
          </Typography>
          <Typography variant="body2" color="#618685">
            {civilization.army_type} Civilization - {civilization.expansion} Expansion
          </Typography>
          <Typography variant="body1" sx={{ my: 1 }} color="#618685">
            {civilization.team_bonus}
          </Typography>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Attributes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {civilization.civilization_bonus &&
                civilization.civilization_bonus.map((item) => {
                  return <Typography key={item}>{item}</Typography>;
                })}
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Fragment>
  );
};

CivilizationDetail.propTypes = {
  civilization: PropTypes.object,
};

export default CivilizationDetail;

