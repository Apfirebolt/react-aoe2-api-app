import React, { useReducer } from 'react';
import axios from 'axios';
import TechnologyContext from './technologyContext';
import TechnologyReducer from './technologyReducer';
import {
  SET_LOADING,
  CLEAR_TECHNOLOGIES,
  GET_TECHNOLOGIES
} from '../types';

const TechnologyState = props => {
  const initialState = {
    technologies: [],
    loading: false
  };

  const [state, dispatch] = useReducer(TechnologyReducer, initialState);

  // Get All Technologies
  const getTechnologies = async () => {
    setLoading();

    const res = await axios.get(
      `https://age-of-empires-2-api.herokuapp.com/api/v1/technologies`
    );

    dispatch({
      type: GET_TECHNOLOGIES,
      payload: res.data.technologies
    });
  };

  // Clear Technologies
  const clearTechnologies = () => dispatch({ type: CLEAR_TECHNOLOGIES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TechnologyContext.Provider
      value={{
        technologies: state.technologies,
        technology: state.technology,
        loading: state.loading,
        clearTechnologies,
        getTechnologies
      }}
    >
      {props.children}
    </TechnologyContext.Provider>
  );
};

export default TechnologyState;
