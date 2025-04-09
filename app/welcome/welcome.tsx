import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Gamepad2, BadgeCheck, Home } from "lucide-react";
import Header from "app/routes/header";

export function Welcome() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-gray-800 dark:text-gray-100"
      style={{ backgroundImage: "url('/Haikei.png')" }}
    >
    
    {/* ヘッダー */}
    <Header />

      {/* メイン */}
      <div className="pt-40 flex items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* メインタイトル */}
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            プロフィールへようこそ
          </motion.h2>

          {/* ボタン */}
          <div className="space-x-4">
            <Link to="/hobbies">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-400 to-lime-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition"
              >
                🎮 趣味・特技
              </motion.button>
            </Link>

            <Link to="/profile">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition"
              >
                💁 自己紹介
              </motion.button>
            </Link>

            <Link to="/skills">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition"
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
