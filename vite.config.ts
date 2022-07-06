import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     logOverride: { "this-is-undefined-in-esm": "silent" },
//   },
//   server: {
//     port: loadEnv(...process.env):,
//   },
// })
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") }

  return defineConfig({
    plugins: [react()],
    esbuild: {
      logOverride: { "this-is-undefined-in-esm": "silent" },
    },
    server: {
      port: Number(process.env.PORT),
    },
  })
}
