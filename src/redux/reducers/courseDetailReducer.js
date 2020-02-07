let initState = {};

const courseDetailReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case "GET_COURSE_DETAIL": {
      let newState = payload;
      return newState;
    }
    default:
      return state;
  }
};
export default courseDetailReducer