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
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-stone-300 shadow-xl max-w-4xl w-full space-y-8"
        >
          {/* タイトル */}
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 tracking-wide">
            🎤 趣味・特技
          </h1>

          {/* セクションカード */}
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-stone-200 shadow space-y-6"
          >
            {[
              "カラオケ大好き。学生の頃は一人でもしょっちゅう行ってた。",
              "フェスも当たればいってた。直近のRJFで聞いた羊文学にハマっている。",
              "アニメではロボットやメカ系ジャンルが好み。",
              "最近はプラモ作りをちょこちょこ行っている。",
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={item}
                className="text-lg leading-relaxed text-stone-700"
              >
                {text}
              </motion.p>
            ))}
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
