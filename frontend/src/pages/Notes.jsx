import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { LIVE_URL } from '../const'

function Notes() {
  const navigate = useNavigate();

  // fetch data from database and store that data into this file and display it

  const [notes, setNotes] = useState([]);

  //fetch data 
  useEffect(() => {

    const fetchNotes = async () => {

      try {

        const token = localStorage.getItem("token");
        const response = await axios.get(`${LIVE_URL}/api/note/getnotes`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        //storing data
        setNotes(response.data.notes)

      } catch (error) {
        console.log(error)
      }


    }

    fetchNotes();

  }, [])


  const handleDelete = async(id) => {
    try{

      const token = localStorage.getItem("token");

      await axios.delete(`${LIVE_URL}/api/note/deletenote/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      )

      toast.success("note deleted");

      setNotes(notes.filter(note => note._id !== id));

    }catch(error){
      console.log(error)
      toast.error("note not deleted")
    }
  }

 return (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10 justify-items-center'>
    {notes.map((note) => (
      <div key={note._id} className='flex flex-col justify-center items-center bg-white rounded-2xl w-full max-w-md border border-black mt-5 p-5'>
        <h1 className='text-black font-bold text-2xl mt-10'>{note.title}</h1>
        <p className='text-gray-700 font-semibold text-xl mt-5 text-justify'>{note.content}</p>

        <div className='flex gap-5 mt-5 mb-8 flex-wrap justify-center'>
          <button onClick={() => navigate(`/edit/${note._id}`)} className='text-white font-semibold text-lg bg-blue-600 rounded-xl px-8 py-3 hover:bg-blue-800 hover:scale-105 transform duration-300 cursor-pointer'>Edit</button>
          <button onClick={() => handleDelete(note._id)} className='text-white font-semibold text-lg bg-blue-600 rounded-xl px-8 py-3 hover:bg-blue-800 hover:scale-105 transform duration-300 cursor-pointer'>Delete</button>
        </div>
      </div>
    ))}
  </div>
)
}

export default Notes