import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", formData)
            localStorage.setItem("token", response.data.token)
            toast.success("Login Successful");
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("login failed")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className='bg-blue-100 min-h-screen flex justify-center items-center px-4'> {/* padding for small screens */}
            <div className='flex flex-col justify-center items-center bg-white rounded-2xl w-full max-w-md sm:w-150 p-6 sm:p-10'>
                <h1 className='text-black font-bold text-2xl sm:text-3xl mt-6 sm:mt-10 text-center'>Login</h1>

                <form onSubmit={handleSubmit} className='flex flex-col items-center w-full mt-6 sm:mt-8'>

                    {/* email */}
                    <input
                        type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        className='mt-4 sm:mt-5 border border-gray-700 px-4 py-2 sm:py-3 text-base sm:text-xl text-gray-700 font-semibold rounded-xl w-full' />

                    {/* Password */}
                    <input
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Password'
                        className='mt-4 sm:mt-5 border border-gray-700 px-4 py-2 sm:py-3 text-base sm:text-xl text-gray-700 font-semibold rounded-xl w-full' />

                    <button
                        type='submit'
                        className='bg-blue-600 mt-6 sm:mt-8 text-white font-semibold rounded-2xl px-12 sm:px-20 py-2 sm:py-3 text-base sm:text-xl cursor-pointer hover:bg-blue-800 hover:scale-105 transform duration-300 w-full'>
                        Login
                    </button>
                </form>

                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-5 mb-6 sm:mb-8 justify-center items-center text-center'>
                    <p className='text-base sm:text-xl font-semibold text-gray-600'>Don't have an account?</p>
                    <button
                        onClick={() => navigate("/")}
                        className='text-base sm:text-xl font-semibold text-blue-600 cursor-pointer hover:scale-105 transform duration-300'>
                        Register
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Login