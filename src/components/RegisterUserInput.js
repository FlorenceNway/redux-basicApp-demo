import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { addUser } from "../store/actions/register.action";

const RegisterUserInput = () => {
    const [inputValue,setInputValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputValue(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch({type: 'ADD_USER', payload: {id: 1, username: inputValue}})
        dispatch(addUser(inputValue))
        setInputValue('')
    }
    
    return (
        <form onSubmit = {submitHandler}>
            Username: 
            <input type='text' onChange={handleChange} value={inputValue}/>
            <button>add</button>
        </form>
        
    )
}

export default RegisterUserInput;