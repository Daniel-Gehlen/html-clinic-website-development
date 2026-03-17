import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // We'll keep it simple for now, can move to src later if we want strict separation
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        hours: "hours.html",
        contact: "contact.html",
      },
    },
  },
});
