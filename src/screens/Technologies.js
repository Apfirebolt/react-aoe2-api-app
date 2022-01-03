import React, { Fragment, useContext, useEffect } from "react";
import TechnologyContext from '../context/technologies/technologyContext';
import TechnologyComponent from '../components/technologies/TechnologyDetail';

const TechnologyPage = () => {
  const technologyContext = useContext(TechnologyContext);

  const { getTechnologies, technologies } = technologyContext;

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <Fragment>
      <div className="columns">
        <div className="column col-12 justify-center mt-3">
          <p>Technology Page</p>
          {technologies.map(technology => (
            <TechnologyComponent key={technology.id} technology={technology} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TechnologyPage;
