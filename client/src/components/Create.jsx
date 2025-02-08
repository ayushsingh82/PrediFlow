import React, { useState } from 'react'
import { ConnectButton } from './ConnectButton'
import { FaChartLine, FaPlus, FaUser, FaQuestionCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { publicClient, getWalletClient, chainConfig } from '../config'
import { wagmiAbi } from '../abi'
import { usePrivy } from '@privy-io/react-auth'

function Create() {
  const navigate = useNavigate()
  const { user } = usePrivy()
  
  const [question, setQuestion] = useState('')
  const [option1, setOption1] = useState('Yes')
  const [option2, setOption2] = useState('No')
  const [endTime, setEndTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const switchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainConfig.chainId }],
      })
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [chainConfig],
          })
        } catch (addError) {
          console.error('Error adding chain:', addError)
          throw new Error('Failed to add network to MetaMask')
        }
      } else {
        throw switchError
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      // First switch to Flow Testnet
      await switchNetwork()

      const walletClient = getWalletClient()
      if (!walletClient) {
        throw new Error('Wallet not connected')
      }

      // Get the signer's address
      const [address] = await walletClient.getAddresses()

      const { request } = await publicClient.simulateContract({
        address: '0x43ca3D2C94be00692D207C6A1e60D8B325c6f12f',
        abi: wagmiAbi,
        functionName: 'submitQuestion',
        args: [question],
        account: address  // Use the signer's address
      })

      // Write to the contract using the wallet client
      const hash = await walletClient.writeContract(request)
      
      // Wait for transaction confirmation
      setSuccess('Waiting for transaction confirmation...')
      await publicClient.waitForTransactionReceipt({ hash })

      setSuccess('Prediction created successfully!')
      setTimeout(() => navigate('/live-bets'), 2000)
    } catch (err) {
      console.error('Error creating prediction:', err)
      setError(err.message || 'Failed to create prediction. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center p-8">
      {/* Header with Wallet Connection */}
      <div className="w-full max-w-3xl mb-16">
        <div className="flex flex-col items-center mb-4">
          <h1 
            onClick={() => navigate('/')}
            className="text-3xl font-bold text-pink-600 cursor-pointer hover:text-pink-500 transition-colors mb-4"
          >
            PrediFlow
          </h1>
          <div className="bg-blue-500 rounded-2xl p-2">
            <ConnectButton />
          </div>
        </div>
        <div className="h-px bg-pink-800/60 w-full mt-4"></div>
      </div>

      {/* Create Form */}
      <div className="w-full max-w-xl mb-16">
        <div className="bg-pink-300 rounded-2xl p-8 border-2 border-pink-500">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaQuestionCircle className="text-pink-400 text-3xl" />
            <h2 className="text-2xl font-bold text-white text-center">Create New Prediction</h2>
          </div>
          
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Description */}
            <div className="bg-pink-200 p-5 rounded-xl border border-pink-400">
              <label className="block text-black text-sm font-semibold mb-2">
                What's your prediction?
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-pink-400 text-black placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="E.g., Will Bitcoin reach $100k?"
                rows="2"
                required
              />
            </div>

            {/* Options */}
            <div className="bg-pink-200 p-5 rounded-xl border border-pink-400">
              <label className="block text-black text-sm font-semibold mb-3">
                Prediction Options
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-black mb-2">Option 1</div>
                  <input
                    type="text"
                    value={option1}
                    onChange={(e) => setOption1(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-pink-400 text-black placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                    placeholder="Yes"
                  />
                </div>
                <div>
                  <div className="text-xs text-black mb-2">Option 2</div>
                  <input
                    type="text"
                    value={option2}
                    onChange={(e) => setOption2(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-pink-400 text-black placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                    placeholder="No"
                  />
                </div>
              </div>
            </div>

            {/* End Time */}
            <div className="bg-pink-200 p-5 rounded-xl border border-pink-400">
              <label className="block text-black text-sm font-semibold mb-2">
                When will this prediction end?
              </label>
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-pink-400 text-black placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 
                text-white font-bold py-3.5 px-6 rounded-xl border-2 border-pink-500/50 transition-all 
                transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Creating Prediction...' : 'Create Prediction'}
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

export default Create