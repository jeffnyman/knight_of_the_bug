console.log("Game Loaded.");

import * as splash from "screen/splash/splash.js";

function start() {
  console.log("Game Started.");
}

splash.load(document.querySelector("#game")).then(start);
