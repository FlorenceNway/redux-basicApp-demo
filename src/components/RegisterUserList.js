import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../store/actions/register.action';


const RegisterUserList = () => {

    const users = useSelector(({users}) => users)
   const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteUser(id))
    }

    return (
        <ul>
            {users.map(({id, username}) => {
               // const isDisableDown = users.length -1 === index
               return ( 
                <li key={id}>
                    {/* <input type='checkbox' onChange={()=>checkboxHandler(id)}/> */}
                    <span>{username}</span>
                    <button onClick={() => deleteHandler(id)} >delete</button>
                    {/* <button onClick={deleteHandler} data-id={todo.id}>delete</button>
                    <button onClick={() => moveUpHandler(id)} disabled={!index}>up</button>
                    <button onClick={() => moveDownHandler(id)} disabled={isDisableDown}>down</button> */}
                </li>)
            })
            }
        </ul>
    )
}

export default RegisterUserList;