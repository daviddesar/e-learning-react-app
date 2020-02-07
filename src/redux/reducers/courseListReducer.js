let initState = [];

const courseListReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "GET_COURSELIST": {
      let newState = [];
      Object.keys(payload).forEach(key => {
        newState.push(payload[key]);
      });
      return newState;
    }
    default:
      return state;
  }
};

export default courseListReducer;
