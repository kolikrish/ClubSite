import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  // Add any additional SSR configuration here
  server: {
    port: 3000,
  },
} satisfies Config;
