import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "profile", label: "💁 自己紹介", content: "私は未来から来た開発者です。" },
  { id: "skills", label: "🛠 技術・資格", content: "React, TypeScript, AWS などを扱えます。" },
  { id: "hobbies", label: "🎮 趣味・特技", content: "ゲーム、AIアート生成、未来都市散策が好きです。" },
];

export default function Tab() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
      {/* タブボタン */}
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 font-medium rounded-full transition duration-300 
              ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white shadow-[0_0_15px_rgba(255,0,255,0.7)]"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* タブコンテンツ */}
      <div className="min-h-[100px] text-center text-lg text-white">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
