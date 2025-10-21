const server = import.meta.env.VITE_API_BASE_URL;

export const API_FILES = server;
export const API_BASE_URL = server + "/api";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: API_BASE_URL + "/auth/login",
  },
  DASHBOARD: {
    BASE: API_BASE_URL + "/summary",
  },
  CUSTOMERS: {
    BASE: API_BASE_URL + "/customers",
    PAGINATED: API_BASE_URL + "/customers/paginated",
    BY_ID: function (id) {
      return API_BASE_URL + "/customers/" + id;
    },
  }
};
export const API_CONFIG = {
  DEFAULT_HEADERS: {
    Accept: "application/json",
  },
  TIMEOUT: 10000,
};

import axios from "axios";
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized, redirecting to login...", error.response);
    }
    return Promise.reject(error);
  }
);

export default api;
