import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Birthday() {
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-red-100 to-pink-300 flex flex-col items-center justify-center text-center p-6 relative">
      
      {/* Confetti Effect */}
      <Confetti width={width} height={height} numberOfPieces={250} />

      {/* Floating hearts */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Heart className="text-red-500 w-10 h-10" fill="red" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Heart className="text-pink-500 w-12 h-12" fill="pink" />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl z-10 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Happy Birthday 🎉 Bugu ❤️
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Wishing you the happiest birthday, my love! 🎂 Every moment with you
          is a gift, and today is all about celebrating the amazing person you
          are. 💕
        </p>

        {/* Place for GIF */}
        <div className="mb-6 w-full flex justify-center">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenFqdHYxanUwN3ltOWZhODJyNDJzNjUzdm4wdWgxYzFxejRoZ2EyMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z21HJj2kz9uBG/giphy.gif" // <-- Replace this with your GIF file path
            alt="Birthday Gif"
            className="rounded-xl shadow-md max-h-64"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600"
        >
          I Love You, Bugu 💖
        </motion.button>
      </motion.div>
    </div>
  );
}
