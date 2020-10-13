import * as Api from "./apiRequest";
import * as path from "./apiList";

export const fetchUser = function (...params) {
  return Api.getRequest('http://dummy.restapiexample.com/api/v1/employees');
};

export const userLogin = function (...params) {
  //console.log("data user index ",params[0])
  return "";//Api.axiosPostWithToken(path.API_LOGIN, params[0]);
};

export const fetchUserById = function (...params) {
  const url = `${path.API_FETCH_USER}${params[0].userId}`;
  return Api.getRequest(url);
};

export const userLogout = function (...params) {
  return Api.postRequest(path.API_LOGOUT, params[0]);
};

// user update path
export const userUpdate = function (...params) {
  const updatePath = path.API_USER_ADD + params[0].userId;
  return Api.putRequestData(updatePath, params[0]);
};
//***********************User Internal************************/
