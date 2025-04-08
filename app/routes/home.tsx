import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hobbies from "./hobbies";
import Profile from "./profile";
import Skills from "./skills";
import Test from "./test";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}

export const home = [
  { path: "/", element: <Welcome /> },
  { path: "/hobbies", element: <Hobbies /> },
  { path: "/profile", element: <Profile /> },
  { path: "/skills", element: <Skills /> },
  { path: "/test", element: <Test /> },
];
