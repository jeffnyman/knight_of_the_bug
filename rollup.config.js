import includePaths from "rollup-plugin-includepaths";

let includePathOptions = {
  paths: ["src/js"],
};

export default {
  input: "src/js/game.js",
  output: [
    {
      file: "src/game.rollup.js",
      format: "iife",
    },
  ],

  plugins: [includePaths(includePathOptions)],
};
