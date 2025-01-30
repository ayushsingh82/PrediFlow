import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaChartLine, FaPlus, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center p-8">
      {/* Header with Wallet Connection */}
      <div className="w-full max-w-3xl mb-16">
        <div className="flex justify-between items-center mb-4">
          <h1 
            onClick={() => navigate('/')}
            className="text-3xl font-bold text-pink-600 cursor-pointer hover:text-pink-500 transition-colors"
          >
            Vortis
          </h1>
          <ConnectButton />
        </div>
        <div className="h-px bg-pink-800/60 w-full"></div>
      </div>

      {/* Stats Boxes */}
      <div className="w-full max-w-3xl mb-8">
        <div className="grid grid-cols-3 bg-pink-300 rounded-2xl overflow-hidden border-2 border-pink-500">
          <div className="p-4 text-center border-r border-pink-800/60">
            <h3 className="text-sm font-semibold text-black mb-1">Total Bets</h3>
            <p className="text-2xl font-bold text-black">0</p>
          </div>
          
          <div className="p-4 text-center border-r border-pink-800/60">
            <h3 className="text-sm font-semibold text-black mb-1">Win Percentage</h3>
            <p className="text-2xl font-bold text-black">0%</p>
          </div>
          
          <div className="p-4 text-center">
            <h3 className="text-sm font-semibold text-black mb-1">Active Bets</h3>
            <p className="text-2xl font-bold text-black">0</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="w-full max-w-3xl mb-16">
        <div className="bg-pink-300 rounded-2xl p-6 border-2 border-pink-500">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Recent Activities</h2>
          <div className="text-black">
            <div className="border-b border-pink-800/60 py-3">
              <p className="text-center">No recent activities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="w-full max-w-3xl">
        <div className="bg-pink-300 rounded-2xl p-6 border-2 border-pink-500 flex justify-between items-center px-16">
          <button 
            onClick={() => navigate('/live-bets')}
            className="flex flex-col items-center gap-2 text-black"
          >
            <FaChartLine size={32} />
            <span className="text-sm">Live Bets</span>
          </button>
          <button 
            onClick={() => navigate('/create')}
            className="bg-pink-600 hover:bg-pink-500 text-white p-5 rounded-full transition-colors border-2 border-pink-500"
          >
            <FaPlus size={36} />
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="flex flex-col items-center gap-2 text-black"
          >
            <FaUser size={32} />
            <span className="text-sm">Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
