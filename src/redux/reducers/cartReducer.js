let initState = [];

let localStorageCart = JSON.parse(localStorage.getItem("cart"));
if (localStorageCart) {
  initState = [...localStorageCart];
}

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD_COURSE_CART": {
      let newState = [...state];
      let courseIndex = newState.findIndex(course => course.id === payload.id);
      if (courseIndex === -1) {
        newState.push(payload);
      }
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case "DELETE_COURSE_CART": {
      let newState = [...state];
      let courseIndex = newState.findIndex(course => course.id === payload);
      newState.splice(courseIndex, 1);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};
export default cartReducer;
