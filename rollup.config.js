import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: false,
      },
    ],
    external: ["react"],
    plugins: [external(), resolve(), commonjs()],
  },
];
