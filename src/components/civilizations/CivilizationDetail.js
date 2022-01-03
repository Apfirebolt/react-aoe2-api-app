import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const CivilizationDetail = (props) => {
  const { civilization } = props;
  
  return (
    <Fragment>
      <p>{civilization.name}</p>
      <p>{civilization.army_type}</p>
    </Fragment>
  );
};

CivilizationDetail.propTypes = {
  civilization: PropTypes.object,
};

export default CivilizationDetail;
