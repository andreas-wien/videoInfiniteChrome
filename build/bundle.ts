import { build, stop } from "esbuild";

await build({
  entryPoints: ["./src/main.ts"],
  bundle: true,
  outfile: "./release/main.js",
  platform: "browser",
  minify: true,
});

stop();
