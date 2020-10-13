import {
    PENDING,
    ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SEND_EMAIL_SUCCESS,
    SIGN_UP_SUCCESS,
    RESEND_EMAIL_SUCCESS,
    FETCH_USERS_SUCCESS,
    FETCH_INTERNAL_USERS_SUCCESS,
    FIND_USER_SUCCESS,
    CLEAR_USER_SUCCESS,
    FIND_USER_BY_ID_SUCCESS,
    CREATE_USER_APPROVAL_SUCCESS,
    FETCH_ORGANISATION_SUCCESS,
    FETCH_CUSTOM_FIELD_BY_USERTYPE_SUCCESS,
  } from "./types/index";
  import { toast } from "react-toastify";
  import {
    userLogin,
    userLogout,
    userEmail,
    userSignUp,
    userResendEmail,
    fetchUser,
    userUpdate,
    createUser,
    fetchInternalUser,
    findUser,
    updateInternalUser,
    deleteInternalUser,
    fetchUserById,
    updateApproval,
    deactivateUser,
    activateUser,
    activateUserGroup,
    deActivateUserGroup,
    updateUserRole,
    createGroup,
    fetchOrganisation,
    fetchCustomField,
  } from "./../data/user";
  
  export function FetchUser(params) {
    return async (dispatch) => {
      dispatch({
        type: PENDING,
      });
      try {
        const users = await fetchUser(params).then((res) => res);
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: users.data,
        });
      } catch (err) {
        dispatch({
          type: ERROR,
          error: err.response,
        });
        if (err.response && err.response.data)
          toast.error(err.response.data.status.message);
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
        if (err.response && err.response.data)
          toast.error(err.response.data.status.message);
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
        if (err.response && err.response.data)
          toast.error(err.response.data.status.message);
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
        localStorage.clear();
        toast.error("User logout successfully");
        window.location.assign("/login");
      } catch (err) {
        dispatch({
          type: ERROR,
          error: err.message,
        });
        if (err.response && err.response.data) {
          localStorage.clear();
          // toast.error(err.response.data.status.message)
          window.location.assign("/login");
        }
      }
    };
  }
    