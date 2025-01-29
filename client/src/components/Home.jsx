import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-pink-950 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Prediction Market
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Trade on your predictions and earn rewards
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-pink-900 rounded-2xl p-2">
              <ConnectButton />
            </div>
            <button 
              onClick={() => navigate('/profile')}
              className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-2xl border-2 border-pink-500 transition-colors text-xl"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
