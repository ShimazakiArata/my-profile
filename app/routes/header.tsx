import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButton = location.pathname !== "/";

  const navItems = [
    { path: "/", label: "ホーム" },
    { path: "/profile", label: "経歴" },
    { path: "/hobbies", label: "趣味" },
    { path: "/skills", label: "技術・資格" },
  ];

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/90 text-gray-800 backdrop-blur-md border-b border-gray-200 z-50 shadow-md">
      {/* 左：戻るボタンとロゴを横並びで */}
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

      {/* ナビゲーション */}
      <nav className="flex gap-4 md:gap-6">
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
    </header>
  );
}
