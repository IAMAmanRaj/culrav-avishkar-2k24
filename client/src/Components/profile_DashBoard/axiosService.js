import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_SERVER_URL,
  headers: {
    Accept: "application/json",
  },
});
export default Axios;
