import React, { Fragment, useEffect, useContext } from "react";
import CivilizationContext from '../context/civilizations/civilizationContext';

const CivilizationPage = () => {
  const civilizationContext = useContext(CivilizationContext);

  const { getCivilizations, civilizations } = civilizationContext;

  useEffect(() => {
    getCivilizations();
  }, []);

  return (
    <Fragment>
      <div className="columns">
        <div className="column col-12 justify-center mt-3">
          <p>Civilization Page</p>
          {civilizations.map(civilization => (
            <p key={civilization.id}>{civilization.name}</p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CivilizationPage;
