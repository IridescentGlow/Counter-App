import { useState } from "react";
import { motion } from "framer-motion";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-900 to-purple-900 text-white">
      <motion.h1 
        className="text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Counter App
      </motion.h1>
      <motion.div 
        className="text-7xl font-extrabold mb-8 p-6 bg-white text-black rounded-2xl shadow-xl"
        key={count}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {count}
      </motion.div>
      <div className="flex gap-4 mt-10">
        <button 
          className="bg-green-500 hover:bg-green-600 px-6 py-3 text-lg rounded-xl shadow-lg"
          onClick={() => setCount(count + 1)}
        >
          + Increase
        </button>
        <button 
          className="bg-red-500 hover:bg-red-600 px-6 py-3 text-lg rounded-xl shadow-lg"
          onClick={() => setCount(count - 1)}
        >
          - Decrease
        </button>
        <button 
          className="bg-gray-700 hover:bg-gray-800 px-6 py-3 text-lg rounded-xl shadow-lg"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}