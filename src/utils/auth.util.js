import { __getCookie } from "./cookie.util";

const isAuth = () => {
  const data = __getCookie("ak-sender-data");
  return data.cookieExists;
};

export default isAuth
