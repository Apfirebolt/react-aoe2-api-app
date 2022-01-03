import React, { Fragment, useContext, useEffect } from "react";
import StructureContext from '../context/structures/structureContext';

const StructuresPage = () => {
  const structureContext = useContext(StructureContext);

  const { getStructures, structures } = structureContext;

  useEffect(() => {
    getStructures();
  }, []);

  return (
    <Fragment>
      <div className="columns">
        <div className="column col-12 justify-center mt-3">
          <p>Structures Page</p>
          {structures.map(structure => (
            <p key={structure.id}>{structure.name}</p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default StructuresPage;
