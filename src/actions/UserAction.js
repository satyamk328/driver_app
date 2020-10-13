import {
    PENDING,
    ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,   
    FETCH_USERS_SUCCESS,  
    FIND_USER_BY_ID_SUCCESS   
  } from "./types/index";
  import {
    userLogin,
    userLogout,    
    fetchUser,   
    fetchUserById    
  } from "./../data/user";
  
  export function FetchPage(params) {
    return async (dispatch) => {
      dispatch({
        type: PENDING,
      });
      try {
        const users = await fetchUser(params).then((res) => res);
        console.log(users.data);
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: users.data,
        });
      } catch (err) {
        dispatch({
          type: ERROR,
          error: err.response,
        });
       
      }
    };
  }
  
  export function FetchUserById(params) {
    return async (dispatch) => {
      dispatch({
        type: PENDING,
      });
      try {
        const users = await fetchUserById(params).then((res) => res);
        dispatch({
          type: FIND_USER_BY_ID_SUCCESS,
          payload: users.data,
        });
      } catch (err) {
        dispatch({
          type: ERROR,
          error: err.response,
        });
        
      }
    };
  }
  
  export function UserLogin(params) {
    return async (dispatch) => {
      dispatch({
        type: PENDING,
      });
      try {
        const users = await userLogin(params).then((res) => res);
  
        dispatch({
          type: LOGIN_SUCCESS,
          payload: users,
        });
      } catch (err) {
        dispatch({
          type: ERROR,
          error: err.response,
        });
       
      }
    };
  }
  
  export function UserLogout(params) {
    return async (dispatch) => {
      dispatch({
        type: PENDING,
      });
      try {
        const logout = await userLogout(params).then((res) => res);
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: logout.data,
        });
       
      } catch (err) {
        dispatch({
          type: ERROR,
          error: err.message,
        });
       
      }
    };
  }
    