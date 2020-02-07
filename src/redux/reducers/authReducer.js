let initState = { token: null, userId: null, error: null };

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "AUTH_SUCCESS": {
      let newState = {
        ...state,
        ["token"]: payload.token,
        ["userId"]: payload.userId
      };
      return newState;
    }
    case "AUTH_FAIL": {
      let newState = {
        ...state,
        ["error"]: payload
      };
      return newState;
    }
    case "SIGN_OUT": {
      let newState = { token: null, userId: null, error: null };
      return newState;
    }
    default:
      return state;
  }
};
export default authReducer;
