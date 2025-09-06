import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("Gallery", "routes/gallery.tsx"),
  route("events", "routes/events.tsx"),
  route("hackathons", "routes/hackathons.tsx"),
  route("blogs", "routes/blogs.tsx"),
  route("projects","routes/projects.tsx"),
  route("admin", "routes/admin/_layout.tsx", [
    index("routes/admin/dashboard.tsx"),
    route("gallery-management", "routes/admin/gallery-management.tsx"),
    route("hackathon-management", "routes/admin/hackathon-management.tsx")
  ])
] satisfies RouteConfig;