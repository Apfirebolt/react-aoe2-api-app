import React, { Fragment, useContext, useEffect } from "react";
import StructureContext from '../context/structures/structureContext';
import StructureComponent from '../components/structures/StructureDetail';

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
            <StructureComponent key={structure.id} structure={structure} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default StructuresPage;
