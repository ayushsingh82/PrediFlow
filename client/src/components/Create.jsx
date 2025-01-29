import React, { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FaChartLine, FaPlus, FaUser, FaQuestionCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Create() {
  const navigate = useNavigate()
  const [description, setDescription] = useState('')
  const [option1, setOption1] = useState('Yes')
  const [option2, setOption2] = useState('No')
  const [endTime, setEndTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ description, option1, option2, endTime })
  }

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

      {/* Create Form */}
      <div className="w-full max-w-3xl mb-16">
        <div className="bg-pink-900 rounded-2xl p-8 border-2 border-pink-500">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaQuestionCircle className="text-pink-400 text-3xl" />
            <h2 className="text-2xl font-bold text-white text-center">Create New Prediction</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Description */}
            <div className="bg-pink-950/50 p-6 rounded-xl border border-pink-500/30">
              <label className="block text-pink-200 text-sm font-semibold mb-2">
                What's your prediction?
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-pink-950 border-2 border-pink-500/50 text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-400 transition-colors"
                placeholder="E.g., Will Bitcoin reach $100,000 by the end of 2024?"
                rows="3"
              />
            </div>

            {/* Options */}
            <div className="bg-pink-950/50 p-6 rounded-xl border border-pink-500/30">
              <label className="block text-pink-200 text-sm font-semibold mb-4">
                Prediction Options
              </label>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-pink-300 mb-2">Option 1</div>
                  <input
                    type="text"
                    value={option1}
                    onChange={(e) => setOption1(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-pink-950 border-2 border-pink-500/50 text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="Yes"
                  />
                </div>
                <div>
                  <div className="text-xs text-pink-300 mb-2">Option 2</div>
                  <input
                    type="text"
                    value={option2}
                    onChange={(e) => setOption2(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-pink-950 border-2 border-pink-500/50 text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="No"
                  />
                </div>
              </div>
            </div>

            {/* End Time */}
            <div className="bg-pink-950/50 p-6 rounded-xl border border-pink-500/30">
              <label className="block text-pink-200 text-sm font-semibold mb-2">
                When will this prediction end?
              </label>
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-pink-950 border-2 border-pink-500/50 text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-400 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold py-4 px-6 rounded-xl border-2 border-pink-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Create Prediction
            </button>
          </form>
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

export default Create