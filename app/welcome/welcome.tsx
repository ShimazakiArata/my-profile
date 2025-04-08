import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export function Welcome() {
  return (
  <main className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Haikei.png')" }}>

      <div className="text-center space-y-10">
        <h1 className="text-gray-900 text-5xl md:text-7xl font-serif font-bold">
          プロフィール
        </h1>

        <div className="space-y-4">
          <div className="space-x-2">

            <Link to="/hobbies">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-400 to-lime-500 hover:from-blue-500 hover:to-lime-600 text-white text-lg font-bold rounded-full ">
                趣味・特技
              </motion.button>
            </Link>

            <Link to="/profile">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white text-lg font-bold rounded-full ">
                自己紹介
              </motion.button>
            </Link>

            <Link to="/skills">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-green-500 hover:from-amber-500 hover:to-green-600 text-white text-lg font-bold rounded-full ">
                技術・資格
              </motion.button>
            </Link>

          </div>
        </div>

      </div>
    </main>
  );
}
