let initState = ''

const modalReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case 'ADD_COURSE_MODAL': {
            let newState = payload
            return newState
        }
        default: return state
    }
}
export default modalReducer