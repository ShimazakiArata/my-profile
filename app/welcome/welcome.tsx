import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gamepad2, User, BadgeCheck } from "lucide-react";
import Header from "app/routes/header";
import { FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

export function Welcome() {
  return (
    <main className="min-h-screen bg-[url('/wood-texture.jpg')] bg-cover bg-center text-stone-800 relative overflow-hidden">
      <Header />

      {/* メインコンテンツ */}
      <div className="pt-40 px-4 flex justify-center items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-stone-300 shadow-xl max-w-4xl w-full space-y-8"
        >
          {/* プロフィール画像 */}
          <motion.img
            src="/profile.webp"
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full shadow-md border-4 border-stone-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          />

          {/* タイトルと説明 */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 tracking-wide">
              Welcome to My Profile
            </h2>
            <p className="text-stone-700 text-lg">
              ご覧いただきありがとうございます。
            </p>
          </div>

          {/* 自己紹介セクション */}
          <section className="w-full bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-stone-200 shadow space-y-6">
            <h3 className="text-3xl font-semibold text-stone-800">
              自己紹介
            </h3>
            <p className="text-stone-700 leading-relaxed text-lg">
              はじめまして、島崎新太といいます。<br />
              県立の普通校を卒業後、ゲーム開発がしたいと考えていたので専門学校へ進学。<br />
              趣味はカラオケとアニメ視聴。敬愛するアーティストはL'Arc~en~Ciel。<br />
              おすすめのアニメは交響詩篇エウレカセブン。
            </p>
            <p className="text-stone-700 leading-relaxed text-lg">
              C言語中心にゲームを何本か制作。Unity、UnrealEngineなどを使うのが得意です。
            </p>
          </section>

          {/* ナビゲーションボタン */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {[
              {
                to: "/profile",
                icon: <User className="mr-2" size={18} />,
                text: "経歴",
                bg: "bg-amber-200",
                textColor: "text-amber-900",
              },
              {
                to: "/hobbies",
                icon: <Gamepad2 className="mr-2" size={18} />,
                text: "趣味・特技",
                bg: "bg-lime-200",
                textColor: "text-lime-900",
              },
              {
                to: "/skills",
                icon: <BadgeCheck className="mr-2" size={18} />,
                text: "技術・資格",
                bg: "bg-stone-300",
                textColor: "text-stone-900",
              },
            ].map(({ to, icon, text, bg, textColor }) => (
              <Link key={to} to={to}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-5 py-2.5 ${bg} ${textColor} font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300`}
                >
                  {icon}
                  {text}
                </motion.button>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* フッター・SNSリンク */}
      <footer className="mt-20 mb-6 flex justify-center gap-4">
  {/* GitHub */}
  <a
    href="https://github.com/Mazaki0314"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-700 hover:bg-stone-600 transition"
    aria-label="GitHub"
  >
    <FaGithub className="w-6 h-6 text-white" />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/Mazaki177"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-700 hover:bg-stone-600 transition"
    aria-label="X (Twitter)"
  >
    <FaXTwitter className="w-6 h-6 text-white" />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/Mazaki177"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-700 hover:bg-stone-600 transition"
    aria-label="Instagram"
  >
    <FaInstagram className="w-6 h-6 text-white" />
  </a>
</footer>
    </main>
  );
}
