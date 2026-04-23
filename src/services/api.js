import axios from "axios";

const API = axios.create({
  baseURL: "https://annapurna-backend-ei5e.onrender.com", // change after deploy
  withCredentials: true, // important if using session
});

export default API;