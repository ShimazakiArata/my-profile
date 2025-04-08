import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hobbies() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

    return (
      <main 
       className="min-h-screen bg-cover bg-center flex items-center justify-center"
       style={{ backgroundImage: "url('/Haikei.png')" }}
      >
        <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0}}
         transition={{ duration: 0.6, ease: "easeIn"}}
         className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-3xl w-full text-center"
        >
        
        
        <h1 className="text-4xl font-extrabold mb-10 text-gray-800 dark:text-gray-100 tracking-wide">
          🎤 趣味・特技
        </h1>
        
        <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left">
          {[
            {
              icon: "🎮",
              color: "text-teal-500",
              text: "趣味　カラオケ・ライブ・アニメ・ゲーム",
            },
            {
              icon: "🐑",
              color: "text-purple-500",
              text: "ライブよりはフェス派　最近のブームは羊文学",
            },
            {
              icon: "🤖",
              color: "text-blue-500",
              text: "アニメもみます、メカ・ロボットものが好きです",
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

      {/* 戻るボタン */}
      <motion.button
        onClick={goBack}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-2xl"
        aria-label="前の画面に戻る">
        <FaArrowLeft />
      </motion.button>

      </main>
    );
  }

  