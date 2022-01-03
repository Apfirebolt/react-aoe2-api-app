import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const TechnologyDetail = (props) => {
  const { technology } = props;
  return (
    <Fragment>
      <p>{technology.name}</p>
    </Fragment>
  );
};

TechnologyDetail.propTypes = {
  technology: PropTypes.object,
};

export default TechnologyDetail;
