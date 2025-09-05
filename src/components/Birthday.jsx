import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Birthday() {
  const { width, height } = useWindowSize();
  const [showHeart, setShowHeart] = useState(false);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Name form screen
  if (!submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center text-center text-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl p-10 max-w-md"
        >
          <h1 className="text-3xl font-bold text-pink-400 mb-6">
            🎉 Enter Your Name
          </h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name..."
            className="px-4 py-2 rounded-lg w-full text-black mb-4"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => name.trim() && setSubmitted(true)}
            className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700"
          >
            Continue ❤️
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Main Birthday UI
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center text-center p-6 relative text-white overflow-hidden">
      {/* Confetti Effect */}
      <Confetti width={width} height={height} numberOfPieces={200} recycle={true} />

      {/* Diwali Sparkles */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-500"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div
        className="absolute top-32 right-24 w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-500"
        animate={{ scale: [1, 2, 1], opacity: [1, 0.3, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* Flying Balloons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          initial={{ y: height, x: Math.random() * width }}
          animate={{ y: -100 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
        >
          🎈
        </motion.div>
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl p-10 max-w-xl z-10 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold text-pink-400 mb-4">
          🎉 Happy Birthday {name} ❤️
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          On this special day, may your heart shine brighter than Diwali diyas ✨,
          and may our love fly higher than these balloons 🎈.
        </p>

        {/* Place for GIF */}
        <div className="mb-6 w-full flex justify-center">
          <img
            src="https://media.tenor.com/HKQ9w2VpTHwAAAAm/ily.webp" // <-- Replace with your GIF path
            alt="Birthday Gif"
            className="rounded-xl shadow-lg max-h-64 border border-gray-600"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowHeart(true)}
          className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-700"
        >
          Click Me ❤️
        </motion.button>
      </motion.div>

      {/* Big Heart Popup */}
      {showHeart && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            className="relative bg-gradient-to-br from-pink-500 via-red-500 to-pink-700 text-white rounded-full p-20 shadow-2xl flex flex-col items-center justify-center border-4 border-pink-300"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {/* Floating little hearts */}
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -100, opacity: [0, 1, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                ❤️
              </motion.span>
            ))}

            <h2 className="text-5xl font-extrabold drop-shadow-lg">
              I Love You, {name} 💖
            </h2>
            <p className="mt-6 text-2xl italic">Forever & Always Yours ❤️</p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowHeart(false)}
              className="mt-8 bg-white text-pink-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-200"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
