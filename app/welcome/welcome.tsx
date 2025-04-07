export function Welcome() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/app/assets/images/Haikei.png')", // ← 画像パスに変更！
      }}
    >
      <div className="text-center space-y-10">
        <h1 className="text-gray-900 text-5xl md:text-7xl font-serif font-bold">
          プロフィール
        </h1>

        {/* ボタン */}
        <button className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white text-lg font-bold rounded-full shadow-lg transition duration-300">
          詳細を見る
        </button>
      </div>
    </main>
  );
}
