console.log("Game Loaded.");

import * as splash from "screen/splash/splash.js";
import * as map from "screen/map/map.js";
import * as status from "screen/status.js";
import * as combat from "combat/combat.js";
import * as log from "screen/log.js";

let seed = Date.now();
console.log("Seed: ", seed);
ROT.RNG.setSeed(seed);

function start() {
  console.log("Game Started.");

  map.setup(document.querySelector("#map"));
  combat.setup(document.querySelector("#combat"));
  log.setup(document.querySelector("#log"));
  status.setup(document.querySelector("#status"));

  log.add("It's a time for heroic testers!");
}

splash.load(document.querySelector("#game")).then(start);
