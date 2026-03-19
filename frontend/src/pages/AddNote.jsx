import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function AddNote() {

  const navigate = useNavigate();

  const [noteData, setNoteData] = useState({
    title: "",
    content: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("http://localhost:3000/api/note/create",
         noteData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      alert("note added");
      navigate("/dashboard")

    } catch (error) {
      console.log(error)
      alert("note not added")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData({
      ...noteData,
      [name]: value
    })
  }

  return (
    <div className='bg-blue-100 min-h-screen flex justify-center items-center px-4'> {/* added padding for small screens */}
      <div className='flex flex-col justify-center items-center bg-white rounded-2xl w-full max-w-md sm:w-150 p-6 sm:p-10'>
        <h1 className='text-black font-bold text-2xl sm:text-3xl mt-6 sm:mt-10 text-center'>Add New Note</h1>

        <form onSubmit={handleSubmit} className='flex flex-col items-center w-full mt-6 sm:mt-8'>

          {/* title */}
          <input
            type="text"
            name='title'
            value={noteData.title}
            onChange={handleChange}
            placeholder='Title'
            className='mt-4 sm:mt-5 border border-gray-700 px-4 py-2 sm:py-3 text-base sm:text-xl text-gray-700 font-semibold rounded-xl w-full' />

          {/* content */}
          <textarea
            name="content"
            value={noteData.content}
            onChange={handleChange}
            placeholder='Content:'
            className='mt-4 sm:mt-5 border border-gray-700 px-4 py-2 sm:py-3 text-base sm:text-xl text-gray-700 font-semibold rounded-xl w-full'></textarea>

          <button
            type='submit'
            className='bg-blue-600 mt-6 sm:mt-8 text-white font-semibold rounded-2xl px-12 sm:px-20 py-2 sm:py-3 text-base sm:text-xl cursor-pointer hover:bg-blue-800 hover:scale-105 transform duration-300 w-full mb-4 sm:mb-8'>
            Create Note
          </button>

        </form>

      </div>
    </div>
  )
}

export default AddNote