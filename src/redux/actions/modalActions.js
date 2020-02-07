import * as actionTypes from "./actionTypes";

export const addCourseModal = courseName => {
  return { type: actionTypes.ADD_COURSE_MODAL, payload: courseName };
};
