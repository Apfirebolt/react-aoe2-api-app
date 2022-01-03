import {
    SET_LOADING,
    CLEAR_TECHNOLOGIES,
    GET_TECHNOLOGIES,
    GET_TECHNOLOGY
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_TECHNOLOGY:
        return {
          ...state,
          technology: action.payload,
          loading: false
        };
      case CLEAR_TECHNOLOGIES:
        return {
          ...state,
          technologies: [],
          loading: false
        };
      case GET_TECHNOLOGIES: {
        return {
          ...state,
          technologies: action.payload,
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
  