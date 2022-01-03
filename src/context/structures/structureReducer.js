import {
    SET_LOADING,
    CLEAR_STRUCTURES,
    GET_STRUCTURES,
    GET_STRUCTURE
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_STRUCTURE:
        return {
          ...state,
          structure: action.payload,
          loading: false
        };
      case CLEAR_STRUCTURES:
        return {
          ...state,
          structures: [],
          loading: false
        };
      case GET_STRUCTURES: {
        return {
          ...state,
          structures: action.payload,
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
  