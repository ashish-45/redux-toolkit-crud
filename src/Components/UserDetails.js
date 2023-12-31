import React from 'react';
import UserData from '../Data/UserData';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, clearAllUser } from '../store/Slice/UserSlice.js';

export const UserDetails = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user);

    const AddNewUser = (userData) => {
        dispatch(addUser(userData));
    }
    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }
    const resetAllData = () => {
        dispatch(clearAllUser())
    }

    return (
        <div>
            <button onClick={() => AddNewUser(UserData)}>Add New User</button>
            <table>
                <tbody>
                    {data?.[0]?.map((user, id) => (
                        <tr key={id}>
                            <td>{user.name}</td>
                            <td><button onClick={() => deleteUser(id)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={resetAllData}>Reset All</button>
        </div>
    )
}

export default UserDetails;
