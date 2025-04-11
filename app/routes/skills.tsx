// src/pages/Skills.tsx
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./components/header";

export default function Skills() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <main
      className="min-h-screen bg-[url('/wood-texture.jpg')] bg-cover bg-center px-4 pt-40 flex items-center justify-center text-stone-800"
    >
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl max-w-4xl w-full space-y-10"
      >
        <h1 className="text-4xl font-extrabold text-stone-800 tracking-wide text-center">
          ⚙ 技術・資格
        </h1>

        {/* スキルカード（2分割） */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 言語スキル + 使用ツール */}
          <motion.div
            className="bg-white/70 backdrop-blur p-6 rounded-xl shadow text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💻</span>
              <h2 className="text-xl font-semibold">言語・ツールスキル</h2>
            </div>
            <p className="mb-4 text-stone-700">
              C言語 / C++ / C# の基礎を学び、主に以下のツールを使用しています。
            </p>
            <ul className="space-y-2">
              {[
                {
                  name: "Unity",
                  level: "〇",
                  desc: "3Dアクションゲーム制作で活用",
                },
                {
                  name: "Unreal Engine",
                  level: "〇",
                  desc: "設計・ブループリントの実装経験あり",
                },
                {
                  name: "Git",
                  level: "〇",
                  desc: "チーム開発で使用経験あり",
                },
                {
                  name: "Maya",
                  level: "△",
                  desc: "簡易モデリングの学習中",
                },
              ].map((tool, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-xl text-teal-600">{tool.level}</span>
                  <div>
                    <div className="font-semibold">{tool.name}</div>
                    <div className="text-sm text-stone-600">{tool.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-stone-500 mt-4">
              ◎：実務レベル / 〇：使用経験あり / △：学習中
            </p>
          </motion.div>

          {/* 資格 + 受賞歴 */}
          <motion.div
            className="bg-white/70 backdrop-blur p-6 rounded-xl shadow text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📜</span>
              <h2 className="text-xl font-semibold">資格・受賞歴</h2>
            </div>
            <ul className="list-disc pl-5 text-stone-700 space-y-2">
              <li>
                CG-ARTS検定ベーシック / 情報処理検定2級 取得
              </li>
              <li>
                学内コンテストにて構成力賞を受賞（個人制作3Dアクションゲーム）
              </li>
            </ul>
          </motion.div>
        </div>

        <section className="pt-8">
  <h2 className="text-2xl font-bold mb-4 flex items-center">
    🎬 制作作品（動画）
  </h2>
  <div className="aspect-video w-full rounded-xl overflow-hidden shadow border border-stone-300">
    <iframe
      src="https://www.youtube.com/embed/KlRTAyPB4y8?si=9Fcx5XoFg48qrQtk" // ←自分のURLに差し替え
      title="制作動画"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
  <p className="text-stone-600 mt-2 text-sm">
    ※ 専門学校時代にチームで制作した3Dアクションゲームのプレイ映像です。
  </p>
</section>

      </motion.div>
    </main>
  );
}
