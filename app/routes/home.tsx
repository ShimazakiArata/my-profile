import type { Route } from "./+types/home";

// ページコンポーネントのインポート
import { Welcome } from "../welcome/welcome";
import Hobbies from "./hobbies";
import Profile from "./profile";
import Skills from "./skills";
import Test from "./test";
import Header from "./header";

// メタ情報の設定
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// デフォルトで Welcome ページを表示
export default function Home() {
  return <Welcome />;
}

// ルーティング定義
export const home = [
  { path: "/", element: <Welcome /> },
  { path: "/hobbies", element: <Hobbies /> },
  { path: "/profile", element: <Profile /> },
  { path: "/skills", element: <Skills /> },
  { path: "/test", element: <Test /> },
  { path: "/header", element: <Header /> }, 
];
