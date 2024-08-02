import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  // baseURL: "https://aejs.onrender.com/api/",
  // baseURL: "http://api.aejsinfo.com:8001/api/",
  // check

  withCredentials: true,
});

export default axiosInstance;
