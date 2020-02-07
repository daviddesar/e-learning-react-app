import * as actionTypes from "./actionTypes";

export const authSuccess = authInfo => {
  localStorage.setItem("token", authInfo.idToken);
  localStorage.setItem("userId", authInfo.localId);
  return { type: actionTypes.AUTH_SUCCESS, payload: authInfo };
};
export const authFail = errorInfo => {
  return { type: actionTypes.AUTH_FAIL, payload: errorInfo };
};
export const signOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return { type: actionTypes.SIGN_OUT };
};
export const autoSignin = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const authInfo = { token: token, userId: userId };
  if (!token) return signOut();
  else return authSuccess(authInfo);
};
