// routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),                       
  route("/hobbies", "routes/hobbies.tsx"), 
  route("/profile", "routes/profile.tsx"), 

] satisfies RouteConfig;
