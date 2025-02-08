import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ConnectButton } from './ConnectButton'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-pink-200 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8">
          PrediFlow
          </h1>
          <p className="text-xl text-black mb-12">
            Prediction market on Flow powered by eliza AI <br/> and polymarket insights.

            <hr className='mt-[10px] mb-[10px]'/>
            Predict the future  and earn rewards.
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-blue-500 rounded-2xl p-2">
              <ConnectButton />
            </div>
            <button 
              onClick={() => navigate('/profile')}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-2xl border-2 border-blue-600 transition-colors text-xl"
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
