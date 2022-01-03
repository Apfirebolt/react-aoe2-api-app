import React, { Fragment, useEffect, useContext } from "react";
import CivilizationContext from '../context/civilizations/civilizationContext';
import CivilizationComponent from '../components/civilizations/CivilizationDetail';
import { civilizationData } from '../data/civilizations';

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
          {civilizationData.map(civilization => (
            <CivilizationComponent key={civilization.id} civilization={civilization} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CivilizationPage;
