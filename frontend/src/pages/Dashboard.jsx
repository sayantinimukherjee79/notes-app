import React from 'react'
import Notes from './Notes'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className='bg-blue-100 min-h-screen flex justify-center items-start sm:items-center px-4 py-6 sm:py-10'>
      <div className='flex flex-col justify-center items-center bg-white rounded-2xl w-full max-w-4xl sm:w-350 p-4 sm:p-8'>

        {/* Header */}
        <div className='flex flex-col sm:flex-row justify-between items-center w-full mt-6 sm:mt-10 px-2 sm:px-10 gap-4 sm:gap-0'>
          <h1 className='text-black font-bold text-2xl sm:text-3xl text-center sm:text-left'>My Notes</h1>

          <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>
            <button 
              onClick={() => navigate("/add")} 
              className='text-white font-semibold text-lg bg-blue-600 rounded-xl px-6 sm:px-8 py-2 sm:py-3 hover:bg-blue-800 hover:scale-105 transform duration-300 cursor-pointer w-full sm:w-auto'>
              Add Notes
            </button>
            <button 
              onClick={handleLogout} 
              className='text-white font-semibold text-lg bg-blue-600 rounded-xl px-6 sm:px-8 py-2 sm:py-3 hover:bg-blue-800 hover:scale-105 transform duration-300 cursor-pointer w-full sm:w-auto'>
              Logout
            </button>
          </div>
        </div>

        {/* Notes Section */}
        <div className='mt-6 sm:mt-10 bg-blue-50 w-full p-4 sm:p-6 rounded-2xl'>
          <h1 className='text-3xl sm:text-4xl text-black font-bold text-center pt-6 sm:pt-10'>Your Notes</h1>

          <div className='flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-10 px-2 sm:px-4'>
            <Notes/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard