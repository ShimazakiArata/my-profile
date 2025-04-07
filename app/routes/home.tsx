import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
//import Hobbies from "../assets/hobbies";
//import Skills from "../assets/skills";

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
  //{ path: "/hobbies", element: <Hobbies /> },
  //{ path: "/skills", element: <Skills /> },
];

