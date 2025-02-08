import React, { useState } from 'react'
import { ConnectButton } from './ConnectButton'
import { FaChartLine, FaPlus, FaUser, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function BuyBet() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ amount, selectedOption })
  }

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center p-8">
      {/* Header with Wallet Connection */}
      <div className="w-full max-w-3xl mb-16">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <h1 
              onClick={() => navigate('/')}
              className="text-3xl font-bold text-pink-600 cursor-pointer hover:text-pink-500 transition-colors"
            >
              Vortis
            </h1>
          </div>
          <ConnectButton />
        </div>
        <div className="h-px bg-pink-800/60 w-full"></div>
      </div>

      {/* Purchase Form */}
      <div className="w-full max-w-xl mb-16">
        <div className="bg-pink-300 rounded-2xl p-8 border-2 border-pink-500">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaShoppingCart className="text-pink-400 text-3xl" />
            <h2 className="text-2xl font-bold text-white text-center">Purchase Shares</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Input */}
            <div className="bg-pink-200 p-5 rounded-xl border border-pink-400">
              <label className="block text-black text-sm font-semibold mb-2">
                Amount (USDT)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-pink-400 text-black placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="Enter amount..."
                min="0"
                step="0.1"
              />
            </div>

            {/* Options */}
            <div className="bg-pink-200 p-5 rounded-xl border border-pink-400">
              <label className="block text-black text-sm font-semibold mb-3">
                Choose Option
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedOption('yes')}
                  className={`px-4 py-3 rounded-xl border-2 transition-all transform ${
                    selectedOption === 'yes'
                      ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white border-pink-500 scale-105'
                      : 'bg-white text-black border-pink-400 hover:border-pink-500'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedOption('no')}
                  className={`px-4 py-3 rounded-xl border-2 transition-all transform ${
                    selectedOption === 'no'
                      ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white border-pink-500 scale-105'
                      : 'bg-white text-black border-pink-400 hover:border-pink-500'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold py-3.5 px-6 rounded-xl border-2 border-pink-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Purchase Shares
            </button>
          </form>
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

export default BuyBet