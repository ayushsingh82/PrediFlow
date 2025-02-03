import React, { useState } from 'react'
import { ConnectButton } from './ConnectButton'
import { FaChartLine, FaPlus, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import questions from './question.json'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'

function LiveBet() {
  const navigate = useNavigate()
  const questionArray = questions.questions || []
  const [currentIndex, setCurrentIndex] = useState(0)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const yesOpacity = useTransform(x, [-200, 0, 100], [0, 0, 1])
  const noOpacity = useTransform(x, [-100, 0, 200], [1, 0, 0])
  const controls = useAnimation()

  const handleDragEnd = async (_, info) => {
    const swipeThreshold = 100

    if (Math.abs(info.offset.x) > swipeThreshold) {
      await controls.start({
        x: info.offset.x > 0 ? 1000 : -1000,
        transition: { duration: 0.3 },
      })

      if (currentIndex >= questionArray.length - 1) {
        navigate('/profile')
        return
      }

      setCurrentIndex(prev => prev + 1)
      x.set(0)
      y.set(0)
      controls.set({ x: 0, y: 0 })
    } else {
      controls.start({
        x: 0,
        y: 0,
        transition: { type: "spring", duration: 0.5 },
      })
    }
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
            <button
              onClick={() => navigate('/eliza')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:from-purple-500 hover:to-blue-500 transition-colors"
            >
              Eliza AI
            </button>
          </div>
          <ConnectButton />
        </div>
        <div className="h-px bg-pink-800/60 w-full"></div>
      </div>

      {/* Swipeable Card */}
      <div className="w-full max-w-xl mb-16 relative">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, y, rotate }}
          animate={controls}
          onDragEnd={handleDragEnd}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiLz48L2c+PC9zdmc+')]"></div>

            {/* Card Content */}
            <div className="p-6">
              {/* Question Number */}
              <div className="text-white/80 text-sm mb-4">
                Question {currentIndex + 1} of {questionArray.length}
              </div>

              {/* Question */}
              <div className="min-h-[100px] flex items-center mb-6">
                <h3 className="text-xl font-bold text-white text-center w-full">
                  {questionArray[currentIndex]?.question}
                </h3>
              </div>

              {/* Swipe Indicators */}
              <motion.div 
                className="absolute top-1/2 left-4 transform -translate-y-1/2"
                style={{ opacity: noOpacity }}
              >
                <span className="text-6xl">❌</span>
              </motion.div>
              <motion.div 
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                style={{ opacity: yesOpacity }}
              >
                <span className="text-6xl">✅</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
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

export default LiveBet