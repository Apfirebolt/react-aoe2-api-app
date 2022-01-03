import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const redirectToLocation = (link) => {
  window.location.href = link;
}

const TechnologyDetail = (props) => {
  const { technology } = props;
  return (
    <Fragment>
      <Card sx={{ minWidth: 275, my: 1 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {technology.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {technology.description}
          </Typography>
          <Typography variant="body2" color="#618685">
            {technology.age} Age - {technology.expansion} Expansion
          </Typography>

          {Object.entries(technology.cost).map(([key, value]) => {
            return (
              <Typography sx={{ my: 1.5 }} variant="body2" color="#618685">
                {key} - {value}
              </Typography>
            );
          })}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => redirectToLocation(technology.develops_in)}>Develops In</Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

TechnologyDetail.propTypes = {
  technology: PropTypes.object,
};

export default TechnologyDetail;
