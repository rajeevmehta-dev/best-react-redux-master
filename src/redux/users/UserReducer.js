import { USER_REQUEST_API, USER_REQUEST_FAILURE, USER_REQUEST_SUCCESS } from "./UserConsts"

const initialState = {
    loading: false,
    users: [],
    error: null
}
export const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_REQUEST_API:
            return {
                ...state,
                loading: true
            }
        case USER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            }
        case USER_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: null
            }
        default: return { ...state }
    }
}
export default UserReducer;