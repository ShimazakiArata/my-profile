import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Hobbies() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

    return (
      <main className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Haikei.png')" }}>
        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          趣味・特技
        </h1>
        <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="flex items-start gap-4">
            <span className="mt-1 text-teal-500">🏠</span>
            <span>千葉県の船橋に実家暮らし</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1 text-purple-500">🎮</span>
            <span>普通の県立校を卒業した後、ゲーム開発がしたいと思い、専門学校へ進学</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1 text-blue-500">💻</span>
            <span>ゲーム開発しながらIT業界の知識を身に着けていく</span>
          </li>
        </ul>
      </div>
         {/* 前の画面に戻るボタン */}
              <button
                onClick={goBack}
                className="fixed bottom-6 left-6 bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition duration-300"
                aria-label="前の画面に戻る"
              >
                <FaArrowLeft />
              </button>

      </main>
    );
  }

  