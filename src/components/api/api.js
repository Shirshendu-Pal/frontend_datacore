import { BASE_URL } from "./base";
import axios from "axios";

const API = axios.create({ baseURL: BASE_URL });


export const userRegister = (data) => API.post("/register", data);
export const userLogin = (data) => API.post("/login", data);
export const mailVerification = (data) => API.post("/verify", data);
export const checkUserType = (data) => API.post("/userType", data);