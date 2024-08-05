import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000/api/",
  // baseURL: "https://aejs.onrender.com/api/",
  baseURL: "https://aejsinfo.onrender.com/api/",
  // check

  withCredentials: true,
});

export default axiosInstance;
