import React, { useReducer } from 'react';
import axios from 'axios';
import UnitContext from './unitContext';
import UnitReducer from './unitReducer';
import {
  SET_LOADING,
  CLEAR_UNITS,
  GET_UNIT,
  GET_UNITS
} from '../types';

const UnitState = props => {
  const initialState = {
    units: [],
    unit: {},
    loading: false
  };

  const [state, dispatch] = useReducer(UnitReducer, initialState);

  // Get Unit
  const getUnit = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/`
    );

    dispatch({
      type: GET_UNIT,
      payload: res.data
    });
  };

  // Get All Units
  const getUnits = async () => {
    setLoading();

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/units`
    );

    dispatch({
      type: GET_UNITS,
      payload: res.data.units
    });
  };

  // Clear Units
  const clearUnits = () => dispatch({ type: CLEAR_UNITS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <UnitContext.Provider
      value={{
        units: state.units,
        unit: state.unit,
        loading: state.loading,
        clearUnits,
        getUnit,
        getUnits
      }}
    >
      {props.children}
    </UnitContext.Provider>
  );
};

export default UnitState;
