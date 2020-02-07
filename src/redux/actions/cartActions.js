import * as actionTypes from "./actionTypes";

export const addCourseCart = courseList => {
  return { type: actionTypes.ADD_COURSE_CART, payload: courseList };
};
export const deleteCourseCart = courseId => {
    return { type: actionTypes.DELETE_COURSE_CART, payload: courseId}
}