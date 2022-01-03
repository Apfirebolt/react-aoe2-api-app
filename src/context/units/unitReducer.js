import {
    SET_LOADING,
    CLEAR_UNITS,
    GET_UNIT,
    GET_UNITS
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_UNIT:
        return {
          ...state,
          unit: action.payload,
          loading: false
        };
      case CLEAR_UNITS:
        return {
          ...state,
          units: [],
          loading: false
        };
      case GET_UNITS: {
        return {
          ...state,
          units: action.payload,
          loading: false
        };
      }
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  };
  