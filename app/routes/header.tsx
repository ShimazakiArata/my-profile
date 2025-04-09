import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "ホーム" },
    { path: "/profile", label: "自己紹介" },
    { path: "/hobbies", label: "趣味・特技" },
    { path: "/skills", label: "技術・資格" },
  ];

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow z-50">
      
      {/* ロゴ / 名前 */}
      <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white tracking-wide">
        My Profile
      </Link>

      {/* ナビゲーション */}
      <nav className="flex gap-4 md:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all
              ${
                location.pathname === item.path
                  ? "bg-blue-500 text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
