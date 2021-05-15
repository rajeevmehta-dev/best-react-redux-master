import { USER_REQUEST_API, USER_REQUEST_FAILURE, USER_REQUEST_SUCCESS } from "./UserConsts"
import axios from 'axios';
export const userRequestAPI = () => {
    return {
        type: USER_REQUEST_API
    }
}
export const requestSuccess = (users) => {
    return {
        type: USER_REQUEST_SUCCESS,
        payload: users
    }
}


export const requestFailure = (error) => {
    return {
        type: USER_REQUEST_FAILURE,
        payload: error
    }
}

export const getUsers = () => {
    return  (dispatch) =>{
        dispatch(userRequestAPI())
        axios.get('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            // handle data here
            console.log('response.data');
            console.log(response.data);
            let users = response.data.data.map(user => user.employee_name);
            dispatch(requestSuccess(users));
            console.log('users');
                        console.log(users);
        }).catch((error) => {
            // handle error here
            dispatch(requestFailure(error));
        })


    }
}
