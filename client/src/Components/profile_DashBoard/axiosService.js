import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
export default Axios;
