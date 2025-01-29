import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Home() {
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
          <div className="flex justify-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
