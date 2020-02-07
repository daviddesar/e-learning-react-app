import * as actionTypes from './actionTypes'

export const getCourseList = courseList => {
    return {type: actionTypes.GET_COURSELIST, payload: courseList}
}