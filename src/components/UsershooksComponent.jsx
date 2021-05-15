import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/users/UserActions';
import axios from 'axios';
function UsershooksComponent() {
    const state = useSelector(state => state.users);
    const dispatch = useDispatch();

    const saveUser = () => {
        let body = {
            employee_id: '101',
            employee_name: 'Adesh'
        }
        axios.post('http://localhost:3001/users', body).then((result)=>{

            console.log('result.data');
        console.log(result.data);
        }).catch((error)=>{
            console.log('error');
            console.log(error);
        })
    }
    return (
        <div>
            <h1>Users Component With Hooks</h1>
            <ul>

                {
                    state.users &&
                    state.users.map((user, index) =>

                        <li key={index}>
                            <span>{user}</span>
                        </li>
                    )
                }
            </ul>
            <button type="button" onClick={() => dispatch(getUsers())}>Get Users</button>

            <button type="button" onClick={saveUser}>Save User</button>
        </div>
    )
}

export default UsershooksComponent
