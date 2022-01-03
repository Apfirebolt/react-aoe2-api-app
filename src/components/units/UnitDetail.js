import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const UnitDetail = (props) => {
  const { unit } = props;
  return (
    <Fragment>
      <p>{unit.name}</p>
    </Fragment>
  );
};

UnitDetail.propTypes = {
  unit: PropTypes.object,
};

export default UnitDetail;
