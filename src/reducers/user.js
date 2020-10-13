import {
    PENDING,    
    ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    FETCH_USERS,
    FETCH_USERS_SUCCESS,  
    UPDATE_USER,
    UPDATE_USER_SUCCESS,    
    FIND_USER_BY_ID,
    FIND_USER_BY_ID_SUCCESS
  } from "../actions/types";
  
  const initialState = {
    pending: false,
    results: [],
    error: {},
    users: [],
    pagination: {},
    userDataById: {}
  };
  
  export const UserReducer = function (state = initialState, action) {
    switch (action.type) {
      case PENDING:
        return {
          ...state,
          pending: true,
        };
  
      case ERROR:
        return {
          ...state,
          pending: false,
          error: action.error,
        };
  
      case FETCH_USERS:
        return [];
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          pending: false,
          users: [...action.payload.data],
        };
  
      case FIND_USER_BY_ID:
        return [];
      case FIND_USER_BY_ID_SUCCESS:
        return {
          ...state,
          pending: false,
          userDataById: { ...action.payload.data },
        };
      // update reducer case
      case UPDATE_USER:
        return [];
      case UPDATE_USER_SUCCESS:
        return [
          ...state.find(({ id }) => id === action.data),
          action.payload.data,
        ];
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          pending: false,
          results: action.payload.data,
        };
  
      case LOGOUT_SUCCESS:
        return {
          ...state,
          pending: false,
          results: action.payload,
        };
     
  
      default:
        return state;
    }
  };
  