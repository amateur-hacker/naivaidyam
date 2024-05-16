import axios from "axios";

const signinAxiosInstance = axios.create({
  baseURL: "https://naivaidyam-api.vercel.app/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default signinAxiosInstance;
