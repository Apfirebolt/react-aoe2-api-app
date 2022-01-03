import React, { Fragment, useContext, useEffect } from "react";
import UnitContext from '../context/units/unitContext';

const UnitsPage = () => {
  const unitContext = useContext(UnitContext);

  const { getUnits, units } = unitContext;

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <Fragment>
      <div className="columns">
        <div className="column col-12 justify-center mt-3">
          <p>Unit Page</p>
          {units.map(unit => (
            <p key={unit.id}>{unit.name}</p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default UnitsPage;
