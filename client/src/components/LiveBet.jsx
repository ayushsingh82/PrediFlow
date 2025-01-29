import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaChartLine, FaPlus, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function LiveBet() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-pink-950 flex flex-col items-center justify-center p-8">
      {/* Header with Wallet Connection */}
      <div className="w-full max-w-3xl mb-16">
        <div className="flex justify-between items-center mb-4">
          <h1 
            onClick={() => navigate('/')}
            className="text-3xl font-bold text-white cursor-pointer hover:text-pink-400 transition-colors"
          >
            Vortis
          </h1>
          <ConnectButton />
        </div>
        <div className="h-px bg-pink-800/60 w-full"></div>
      </div>

      {/* Live Bets Content */}
      <div className="w-full max-w-3xl mb-16">
        <div className="bg-pink-900 rounded-2xl p-6 border-2 border-pink-500">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Live Bets</h2>
          <div className="text-gray-300">
            <p className="text-center py-4">No active bets at the moment</p>
          </div>
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="w-full max-w-3xl">
        <div className="bg-pink-900 rounded-2xl p-6 border-2 border-pink-500 flex justify-between items-center px-16">
          <button 
            onClick={() => navigate('/live-bets')}
            className="flex flex-col items-center gap-2 text-white hover:text-pink-400 transition-colors"
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

export default LiveBet