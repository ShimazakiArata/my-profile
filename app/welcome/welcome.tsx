import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Gamepad2, BadgeCheck, Home } from "lucide-react";
import Header from "app/routes/header";

export function Welcome() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-gray-100 relative overflow-hidden"
    >

      {/* ヘッダー */}
      <Header />

      {/* メイン */}
      <div className="pt-40 flex items-center justify-center h-full px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12 backdrop-blur-md bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl"
        >
          {/* メインタイトル */}
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome,My Profile
          </motion.h2>

          {/* ボタン */}
          <div className="space-x-4">
            <Link to="/hobbies">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] transition duration-300"
              >
                🎮 趣味・特技
              </motion.button>
            </Link>

            <Link to="/profile">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:shadow-[0_0_25px_rgba(255,0,255,0.8)] transition duration-300"
              >
                💁 自己紹介
              </motion.button>
            </Link>

            <Link to="/skills">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-green-400 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(173,255,47,0.5)] hover:shadow-[0_0_25px_rgba(173,255,47,0.8)] transition duration-300"
              >
                🛠 技術・資格
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
