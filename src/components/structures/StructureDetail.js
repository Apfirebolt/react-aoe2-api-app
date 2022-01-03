import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const StructureDetail = (props) => {
  const { structure } = props;
  return (
    <Fragment>
      <p>{structure.name}</p>
    </Fragment>
  );
};

StructureDetail.propTypes = {
  structure: PropTypes.object,
};

export default StructureDetail;
