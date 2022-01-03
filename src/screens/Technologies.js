import React, { Fragment, useContext, useEffect } from "react";
import TechnologyContext from '../context/technologies/technologyContext';

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
            <p key={technology.id}>{technology.name}</p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TechnologyPage;
