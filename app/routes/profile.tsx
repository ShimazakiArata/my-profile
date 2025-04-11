import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./header";
import WorksCarousel from './components/WorksCarousel'


export default function Profile() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[url('/wood-texture.jpg')] bg-cover bg-center px-4 pt-40 flex flex-col items-center text-stone-800">
      {/* スクロール進捗バー */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-400 to-lime-400 z-50 transition-all duration-200"
        style={{ width: `${scrollPercent}%` }}
      />

      <Header />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl max-w-3xl w-full text-center mb-10 border border-stone-300"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-10 tracking-wide"
        >
          🚀 経歴
        </motion.h1>

        {/* 段落アニメーション */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 text-lg leading-relaxed text-left"
        >
          {[
            "千葉県船橋市に在住、父の影響で小さいころからIT系の道には進もうと思っていた。ゲーム大好き少年だったのでゲーム開発の仕事がしたいと考えるように。",
            "高校卒業後、本格的に学ぶために専門学校へ進学。C言語、Linux、プロマネなどの授業を主に受けながら何作かゲームを制作した。主にUnityを使用したがUnrealEngineでも制作を行った。",
            "現在はドリームキャリアのITS事業部に所属、未経験の技術に揉まれながら、日々成長を目指している。",
          ].map((text, index) => (
            <motion.p key={index} variants={item} className="bg-white/70 p-4 rounded-xl shadow border border-stone-200">
              {text}
            </motion.p>
          ))}
        </motion.section>
      </motion.div>
      
      {/* 制作作品カルーセル */}
      <WorksCarousel />
    </main>
  );
}
