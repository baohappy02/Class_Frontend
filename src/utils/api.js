import axios from "axios";
import { configs } from "./configs";
import { JWT_KEY } from "./constants";
import Helper from "./helpers";
import { get } from "lodash";

const headers = {};
const apiServerUrl = configs.API_URL;

const getAxiosInstance = async ({ version }) => {
  const token = Helper.getDataStored(JWT_KEY);

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  } else {
    delete headers.Authorization;
  }

  const axiosInstance = axios.create({
    baseURL: `${apiServerUrl}/${version}`,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      const arr = [200, 201];
      if (arr.indexOf(response.status) !== -1) {
        const res = {};
        res.status = response.status;
        res.data = response.data;
        return res;
      }
      return Promise.reject(response);
    },
    (error) => {
      const errorData = get(error, "response.data", {
        status: false,
        message: "Lỗi không xác định",
      });
      return Promise.reject(errorData);
    }
  );

  return axiosInstance;
};

const api = async (url, data, options = {}, version = "api/v1") => {
  try {
    const API = await getAxiosInstance({ version });
    if (options.method === "GET") {
      return API({ url, params: data, ...options });
    }
    return API({ url, data, method: "POST", ...options });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;
