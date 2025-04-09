// src/pages/Profile.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./header";

export default function Profile() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center px-4 pt-40 flex flex-col items-center justify-start"
      style={{ backgroundImage: "url('/Haikei.png')" }}
    >
      {/* ヘッダー */}
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-3xl w-full text-center mb-10"
      >
        {/* プロフィール画像 */}
        <motion.img
          src="/neko.webp"
          alt="プロフィール画像"
          className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-teal-400 shadow-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <h1 className="text-4xl font-extrabold mb-10 text-gray-800 dark:text-gray-100 tracking-wide">
          🚀 自己紹介
        </h1>

        <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left">
          {[
            {
              icon: "☺",
              color: "text-teal-500",
              text: "名前　島崎新太　年齢　22歳　誕生日　3月14日",
            },
            {
              icon: "🏠",
              color: "text-teal-500",
              text: "千葉県船橋市に爆誕",
            },
            {
              icon: "🎮",
              color: "text-purple-500",
              text: "普通校を卒業した後、ゲーム開発がしたいと思い専門学校へ進学",
            },
            {
              icon: "💻",
              color: "text-blue-500",
              text: "ゲーム開発しながらIT業界の知識を身に着けていく",
            },
            
          ].map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-4 bg-white/60 dark:bg-gray-700/60 p-4 rounded-xl shadow hover:scale-[1.02] transition-transform duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <span className={`mt-1 text-2xl ${item.color}`}>{item.icon}</span>
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* 📄 ポートフォリオPDF埋め込み */}
      <div className="w-full max-w-5xl h-[80vh] mb-20 shadow-lg border rounded overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        <iframe
          src="/portfolio.pdf"
          title="ポートフォリオPDF"
          width="100%"
          height="100%"
          className="w-full h-full border-none"
        />
      </div>

      {/* 戻るボタン */}
      <motion.button
        onClick={goBack}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-6 left-6 z-50 bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-2xl"
        aria-label="前の画面に戻る"
      >
        <FaArrowLeft />
      </motion.button>
    </main>
  );
}
