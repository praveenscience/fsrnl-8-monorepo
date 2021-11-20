import Axios from "axios";

export const GetUserData = () => Axios.get("/api/auth/");
export const LoginUser = LoginData => Axios.post("/api/auth/login", LoginData);
export const RegisterUser = RegisterData =>
  Axios.post("/api/auth/register", RegisterData);
export const LogoutUser = () => Axios.delete("/api/auth/");
