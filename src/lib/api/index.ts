import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export default axios;
