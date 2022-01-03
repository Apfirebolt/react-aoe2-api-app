import {
    SET_LOADING,
    CLEAR_CIVILIZATIONS,
    GET_CIVILIZATIONS,
    GET_CIVILIZATION
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_CIVILIZATION:
        return {
          ...state,
          civilization: action.payload,
          loading: false
        };
      case CLEAR_CIVILIZATIONS:
        return {
          ...state,
          civilizations: [],
          loading: false
        };
      case GET_CIVILIZATIONS: {
        return {
          ...state,
          civilizations: action.payload,
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
  