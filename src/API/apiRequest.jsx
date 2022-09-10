import { loginStart, loginSuccess, loginFailed } from "../Redux/authSlice";
import AxiosInstance from "./AxiosInstance";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await AxiosInstance.post("/user/login", user);
    const { token } = res.data;
    localStorage.setItem("token", token);
    dispatch(loginSuccess(res.data));
    navigate("/home");
  } catch (error) {
    dispatch(loginFailed());
  }
};

