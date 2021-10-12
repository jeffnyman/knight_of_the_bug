console.log("Game Loaded.");

import * as splash from "screen/splash/splash.js";

let seed = Date.now();
console.log("Seed: ", seed);
ROT.RNG.setSeed(seed);

function start() {
  console.log("Game Started.");
}

splash.load(document.querySelector("#game")).then(start);
