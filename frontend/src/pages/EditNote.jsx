import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { LIVE_URL } from '../const'

function EditNote() {

  const navigate = useNavigate();
  const {id} = useParams();

  const [noteData, setNoteData] = useState({
    title: "",
    content: ""
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token")
      await axios.put(`${LIVE_URL}/api/note/updateNote/${id}`,
        noteData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      toast.success("Edited");
      navigate("/dashboard");

    } catch (error) {
      console.log(error)
      toast.error("note not edited")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData({
      ...noteData,
      [name]: value
    })
  }

  useEffect(() => {
    const fetchSingleNote = async() => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${LIVE_URL}/api/note/getNote/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setNoteData({
          title: response.data.note.title,
          content: response.data.note.content
        });
      } catch(error) {
        console.log("note not fetched")
      }
    }
    fetchSingleNote();
  }, [id])

  return (
    <div className='bg-blue-100 min-h-screen flex justify-center items-center px-4'>
      <div className='flex flex-col justify-center items-center bg-white rounded-2xl w-full max-w-md sm:w-150 p-6 sm:p-10'>
        <h1 className='text-black font-bold text-2xl sm:text-3xl mt-6 sm:mt-10 text-center'>Edit Note</h1>

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

          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 w-full'>
            <button type='submit' className='bg-blue-600 text-white font-semibold rounded-2xl px-12 sm:px-16 py-2 sm:py-3 text-base sm:text-xl cursor-pointer hover:bg-blue-800 hover:scale-105 transform duration-300 w-full sm:w-auto'>Save Changes</button>
            <button onClick={() => navigate("/dashboard")} className='bg-blue-600 text-white font-semibold rounded-2xl px-12 sm:px-16 py-2 sm:py-3 text-base sm:text-xl cursor-pointer hover:bg-blue-800 hover:scale-105 transform duration-300 w-full sm:w-auto'>Cancel</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default EditNote