import { API_LOGIN } from "../api/Endpoints";
import useRequest from "../api/Request";
import { STORAGE } from "../config/Storage";
import { LoginType, User } from "../models/Auth";
import isJwtTokenExpired from "jwt-check-expiry";
import { useNavigate } from "react-router-dom";
import { RequestType } from "../models/Request";

/* ======= Types ========*/
type LoginResponse = {
  token: string;
} | null;

/* ======= Hooks ========*/
/**
 * Returns a boolean value indicating whether the user is authenticated or not.
 * @component useIsAuthenticated
 * @returns {boolean}
 */
export const useIsAuthenticated = (): boolean => {
  let token = localStorage.getItem(STORAGE.TOKEN);

  if (token) {
    // return !isJwtTokenExpired(token); => not readable
    if (isJwtTokenExpired(token)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

/**
 * Returns current user.
 * @component useGetUser
 * @returns {User | null}
 */
export const useGetUser = (): User | null => {
  let storage = localStorage.getItem(STORAGE.USER);

  if (storage) {
    let user = JSON.parse(localStorage.getItem(STORAGE.USER)!);
    return user;
  } else {
    return null;
  }
};

/**
 * This hook is for handle login request.
 * @component useLogin
 * @param {LoginType} loginInfo
 * @param {boolean} remember
 * @returns {RequestType}
 */
export const useLogin = (
  loginInfo: LoginType,
  remember: boolean
): RequestType => {
  let navigate = useNavigate();

  const [{ loading, message, error }, login] = useRequest<LoginResponse>(
    API_LOGIN,
    {
      method: "POST",
      data: { ...loginInfo },
    }
  );

  const loginRequest = () => {
    login().then((res: LoginResponse) => {
      let token = res?.token;
      if (token) {
        localStorage.setItem(STORAGE.TOKEN, token);
        if (remember) {
          localStorage.setItem(
            STORAGE.LOGIN_INFO,
            JSON.stringify({ ...loginInfo })
          );
          localStorage.setItem(STORAGE.REMEMBER, "true");
        } else {
          localStorage.removeItem(STORAGE.LOGIN_INFO);
          localStorage.removeItem(STORAGE.REMEMBER);
        }
        navigate("/");
      }
    });
  };

  return [{ loading, error, message }, loginRequest];
};

/**
 * This hook is for handle logout.
 * @component useLogout
 */
export const useLogout = () => {
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem(STORAGE.TOKEN);
    navigate("/login");
  }
  return logout;
};
