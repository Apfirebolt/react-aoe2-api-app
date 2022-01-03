import React, { useReducer } from 'react';
import axios from 'axios';
import TechnologyContext from './technologyContext';
import TechnologyReducer from './technologyReducer';
import {
  SET_LOADING,
  CLEAR_TECHNOLOGIES,
  GET_TECHNOLOGY,
  GET_TECHNOLOGIES
} from '../types';

const TechnologyState = props => {
  const initialState = {
    technologies: [],
    technology: {},
    loading: false
  };

  const [state, dispatch] = useReducer(TechnologyReducer, initialState);

  // Get Technology
  const getTechnology = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/`
    );

    dispatch({
      type: GET_TECHNOLOGY,
      payload: res.data
    });
  };

  // Get All Technologies
  const getTechnologies = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/`
    );

    dispatch({
      type: GET_TECHNOLOGIES,
      payload: res.data
    });
  };

  // Clear Technologies
  const clearTechnologies = () => dispatch({ type: CLEAR_TECHNOLOGIES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TechnologyContext.Provider
      value={{
        technologies: state.units,
        technology: state.unit,
        loading: state.loading,
        clearTechnologies,
        getTechnology,
        getTechnologies
      }}
    >
      {props.children}
    </TechnologyContext.Provider>
  );
};

export default TechnologyState;
