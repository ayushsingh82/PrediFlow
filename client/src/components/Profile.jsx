import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Profile() {
  return (
    <div className="min-h-screen bg-pink-950 p-8">
      {/* Header with Wallet Connection */}
      <div className="flex justify-center mb-12">
        <ConnectButton />
      </div>

      {/* Stats Boxes */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-3 bg-pink-900/50 rounded-lg overflow-hidden">
          <div className="p-6 text-center border-r border-pink-800">
            <h3 className="text-xl font-semibold text-pink-200 mb-2">Total Bets</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          
          <div className="p-6 text-center border-r border-pink-800">
            <h3 className="text-xl font-semibold text-pink-200 mb-2">Win Percentage</h3>
            <p className="text-3xl font-bold text-white">0%</p>
          </div>
          
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-pink-200 mb-2">Active Bets</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-pink-900/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Recent Activities</h2>
          <div className="text-gray-300">
            <div className="border-b border-pink-800 py-4">
              <p className="text-center">No recent activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
