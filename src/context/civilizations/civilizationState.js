import React, { useReducer } from 'react';
import axios from 'axios';
import CivilizationContext from './civilizationContext';
import CivilizationReducer from './civilizationReducer';
import {
  SET_LOADING,
  GET_CIVILIZATIONS,
  GET_CIVILIZATION,
  CLEAR_CIVILIZATIONS
} from '../types';

const CivilizationState = props => {
  const initialState = {
    civilizations: [],
    civilization: {},
    loading: false
  };

  const [state, dispatch] = useReducer(CivilizationReducer, initialState);

  // Get Civilization
  const getCivilization = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/`
    );

    dispatch({
      type: GET_CIVILIZATION,
      payload: res.data
    });
  };

  // Get All Civilizations
  const getCivilizations = async () => {
    setLoading();

    const res = await axios.get(
      `civilizations`
    );

    dispatch({
      type: GET_CIVILIZATIONS,
      payload: res.data.civilizations
    });
  };

  // Clear Civilizations
  const clearCivilizations = () => dispatch({ type: CLEAR_CIVILIZATIONS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CivilizationContext.Provider
      value={{
        civilizations: state.civilizations,
        civilization: state.civilization,
        loading: state.loading,
        clearCivilizations,
        getCivilization,
        getCivilizations
      }}
    >
      {props.children}
    </CivilizationContext.Provider>
  );
};

export default CivilizationState;
