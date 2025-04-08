import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-10">
        <h1 className="text-gray-900 text-5xl md:text-7xl font-serif font-bold">
          プロフィール
        </h1>

        <div className="space-y-4">
          <div className="space-x-2">
            <Link to="/hobbies">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white text-lg font-bold rounded-full shadow-lg transition duration-300">
                趣味
              </button>
            </Link>

            <Link to="/profile">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white text-lg font-bold rounded-full shadow-lg transition duration-300">
                自己紹介
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </main>
  );
}
