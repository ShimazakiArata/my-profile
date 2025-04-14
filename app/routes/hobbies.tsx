import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./header";

export default function Hobbies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // アニメーション設定
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
    <main className="min-h-screen bg-[url('/wood-texture.jpg')] bg-cover bg-center text-stone-800 relative overflow-hidden">
      <Header />

      <div className="pt-40 px-4 flex justify-center items-center relative z-10">
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
          🎤 趣味
        </motion.h1>

          {/* セクションカード */}
          <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 text-lg leading-relaxed text-left"
        >
          {[
            "趣味はカラオケとアニメを見ること。楽器もやってみたい。",
            "好きなアーティストは、L'Arc~en~Ciel。中でも1995~2008年が個人的ベスト。",
            "アニメはSF物が好きで特にガンダム作品はほぼ視聴済み。",
            "趣味とまでは行かないがプラモ作成もたまにやる。",
          ].map((text, index) => (
            <motion.p key={index} variants={item} className="bg-white/70 p-4 rounded-xl shadow border border-stone-200">
              {text}
            </motion.p>
          ))}
        </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
