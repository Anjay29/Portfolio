import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const SignIn = () => {
    const [input, setInput] = useState({
        username : "",
        password : ""
    })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:8000/api/v1/signin`,input)
            console.log("successfully");
            navigate('/update')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col mt-20 gap-5 justify-center w-80'>
            <input type='text' placeholder='Username' required={true} className='p-2 bg-gray-300 rounded-sm' onChange={(e) => setInput({
                ...input, username : e.target.value
            })}/>
            <input type='password' placeholder='Password' required={true} className='p-2 bg-gray-300 rounded-sm' onChange={(e) => setInput({
                ...input, password : e.target.value
            })}/>
            <button className='bg-blue-400 p-2 rounded'>Sign In</button>
        </form>
    </div>
  )
}

export default SignIn