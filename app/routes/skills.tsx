import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function skills() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

    return (
      <main className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Haikei.png')" }}>
           <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          技術・資格
        </h1>
        <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="flex items-start gap-4">
            <span>
              言語系　c言語、c++、C#　基礎知識
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span>
              開発ツール　Unity,UnrealEngine　基礎、設計方法
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span>
              資格　CG‐ARTS検定ベーシック・情報処理検定2級
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span>
              受賞歴　学内コンテスト構成力賞（個人製作3Dアクションゲーム）
            </span>
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