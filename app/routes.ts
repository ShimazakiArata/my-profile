// routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),                       
  route("/hobbies", "routes/hobbies.tsx"), 
  route("/profile", "routes/profile.tsx"), 
  route("/skills", "routes/skills.tsx"), 
  route("/test", "routes/test.tsx"), 
  route("/header", "routes/header.tsx"), 
  route("/scrolltotop", "routes/scrolltotop.tsx"), 


] satisfies RouteConfig;
