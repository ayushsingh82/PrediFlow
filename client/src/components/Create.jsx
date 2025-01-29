import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaHistory, FaPlus, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Create() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-pink-950 flex flex-col items-center justify-center p-8">
      {/* Header with Wallet Connection */}
      <div className="w-full max-w-3xl mb-16 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Vortis</h1>
        <ConnectButton />
      </div>

      {/* Create Form will go here */}
      <div className="w-full max-w-3xl mb-16">
        <div className="bg-pink-900/50 rounded-lg p-6 border border-pink-800">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create New Bet</h2>
          {/* Add your form elements here */}
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="w-full max-w-3xl">
        <div className="bg-pink-900/50 rounded-lg p-6 border border-pink-800 flex justify-between items-center px-16">
          <button 
            onClick={() => navigate('/history')}
            className="flex flex-col items-center gap-2 text-white hover:text-pink-400 transition-colors"
          >
            <FaHistory size={32} />
            <span className="text-sm">History</span>
          </button>
          <button 
            onClick={() => navigate('/create')}
            className="bg-pink-600 hover:bg-pink-700 text-white p-5 rounded-full transition-colors"
          >
            <FaPlus size={36} />
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="flex flex-col items-center gap-2 text-white hover:text-pink-400 transition-colors"
          >
            <FaUser size={32} />
            <span className="text-sm">Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Create