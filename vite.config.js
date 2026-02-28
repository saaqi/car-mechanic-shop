import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import { ViteMinifyPlugin } from "vite-plugin-minify";
const IN_PRODUCTION = process.env.NODE_ENV === "production";
const IN_DEVELOPMENT = process.env.NODE_ENV === "development";

// Hide Preloader while in development.
const hidePreloader = () => {
  return {
    name: "hide-preloader",
    transformIndexHtml(html) {
      return html.replace(
        `<link rel="stylesheet" href="./src/css/preloader.min.css" type="text/css">`,
        `<!-- <link rel="stylesheet" href="./src/css/preloader.min.css" type="text/css"> -->`
      );
    }
  }
}

export default defineConfig({
  plugins: [

    /* ## Hide Preloader while in Development
    --------------------------------------------- */
    IN_DEVELOPMENT && hidePreloader(),

    /* ## Download Google Fonts and attach them with production build for offline use
    --------------------------------------------- */
    IN_PRODUCTION && webfontDownload(
      [
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap",
      ]
    ),

    /* ## Minify the output HTML files in production
    --------------------------------------------- */
    IN_PRODUCTION && ViteMinifyPlugin({}),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      }
    }
  },

  base: "./",
  server: {
    port: 3000,
  },

  build: {
    // outDir: "./docs",
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },

});
