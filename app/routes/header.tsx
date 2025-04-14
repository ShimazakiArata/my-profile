import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const showBackButton = location.pathname !== "/";

  const navItems = [
    { path: "/", label: "ホーム" },
    { path: "/profile", label: "経歴" },
    { path: "/hobbies", label: "趣味" },
    { path: "/skills", label: "技術・資格" },
  ];

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/90 text-gray-800 backdrop-blur-md border-b border-gray-200 z-50 shadow-md">
      {/* 左：戻るボタンとロゴ */}
      <div className="flex items-center gap-4">
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-stone-700 hover:bg-stone-800 text-white shadow-lg transition"
            aria-label="前の画面に戻る"
          >
            <FaArrowLeft />
          </button>
        )}

        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-gray-700 hover:text-blue-500 transition"
        >
          My Profile
        </Link>
      </div>

      {/* ナビゲーション：PCでは表示、モバイルでは非表示 */}
      <nav className="hidden md:flex gap-4 md:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              location.pathname === item.path
                ? "bg-blue-100 text-blue-700 shadow-inner"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* モバイル：ハンバーガーメニュー */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-blue-600 transition text-xl"
          aria-label="メニューを開く"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* モバイルメニューのドロワー */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-40">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
