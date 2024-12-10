import axios from "axios";

let adminurl = "https://wtsacademy.dedicateddevelopers.us/api";

export const baseURL = adminurl;
let axiosInstance = axios.create({
  baseURL,
});

export const details = (id) => {
  return `https://wtsacademy.dedicateddevelopers.us/uploads/product/${id}`;
};

let imageURL = "https://wtsacademy.dedicateddevelopers.us/uploads/product";

export const product = (media) => {
  return imageURL + `/${media}`;
};

export const profile_pic = (media) => {
  if (!media) return "";
  return `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${media}`;
};

axiosInstance.interceptors.request.use(
  async function (config) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;
