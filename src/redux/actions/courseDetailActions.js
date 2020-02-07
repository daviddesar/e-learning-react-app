import * as actionTypes from './actionTypes'

export const getCourseDetail = course => {
    return {type: actionTypes.GET_COURSE_DETAIL, payload: course}
}