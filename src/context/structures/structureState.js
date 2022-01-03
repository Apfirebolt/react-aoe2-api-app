import React, { useReducer } from 'react';
import axios from 'axios';
import StructureContext from './structureContext';
import StructureReducer from './structureReducer';
import {
  SET_LOADING,
  CLEAR_STRUCTURES,
  GET_STRUCTURE,
  GET_STRUCTURES
} from '../types';

const StructureState = props => {
  const initialState = {
    structures: [],
    structure: {},
    loading: false
  };

  const [state, dispatch] = useReducer(StructureReducer, initialState);

  // Get Structure
  const getStructure = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/`
    );

    dispatch({
      type: GET_STRUCTURE,
      payload: res.data
    });
  };

  // Get All Structures
  const getStructures = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/`
    );

    dispatch({
      type: GET_STRUCTURES,
      payload: res.data
    });
  };

  // Clear Structures
  const clearStructures = () => dispatch({ type: CLEAR_STRUCTURES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <StructureContext.Provider
      value={{
        structures: state.structures,
        structure: state.structure,
        loading: state.loading,
        clearStructures,
        getStructure,
        getStructures
      }}
    >
      {props.children}
    </StructureContext.Provider>
  );
};

export default StructureState;
