import Axios from "axios";

export const GetUserData = () => Axios.get("/api/auth/");
export const LoginUser = LoginData => Axios.post("/api/auth/login", LoginData);
