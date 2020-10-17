import axios from "axios";
import {AsyncStorage} from 'react-native';  

const token = await AsyncStorage.getItem("access_token");

const axiosLoginConfig = {
  // Only for Login APi with clientId & securet Key
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Channel-Type": "WEB",
  },
};

const axiosOtherApiConfig = {
  // All aother APi
  headers: {
    "Content-Type": "application/json",
    "Channel-Type": "WEB",
    // Authorization: authToken
  },
};

const axiosFileUploadConfig = {
  // Only for File Upload APi
  headers: {
    "Content-Type": "multipart/form-data",
    "Channel-Type": "WEB",
    // Authorization: authToken
  },
};

// Set Token and others header here

const axiosConfig = {
  // All APi
  headers: {
    "Content-Type": "application/json",
    "Channel-Type": "WEB",
   // Authorization: token ? `Bearer ${token}` : "",
  },
};

export const fetch = function (URL) {
  return fetch(`${URL}`, axiosConfig);
};

// New Methods

export const getRequest = function (URL) {
  return axios.get(`${URL}`, axiosConfig);
};

export const deleteRequest = function (URL) {
  return axios.delete(`${URL}`, axiosConfig);
};

// update api according to id
export const putRequest = function (URL, params) {
  return axios.put(`${URL}`, params["data"], axiosConfig);
};

export const putRequestData = function (URL, params) {
  return axios.put(`${URL}`, params, axiosConfig);
};

export const postRequest = function (URL, params) {
  return axios.post(`${URL}`, params["data"], axiosConfig);
};

// upload file api
export const postUploadRequest = function (URL, params) {
  return axios.post(`${URL}`, params["data"], axiosConfig);
};
