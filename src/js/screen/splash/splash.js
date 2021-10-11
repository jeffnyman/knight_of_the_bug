import * as title from "/title.js";
import * as ground from "/ground.js";
import * as blurb from "/blurb.js";
import * as keyboard from "utilities/keyboard.js";

let resolve = null;
let element = null;

function handleKeyEvent(e) {
  // The only keypress that matters here is ENTER.
  if (!keyboard.isEnter(e)) {
    return;
  }

  keyboard.pop();

  element.parentNode.removeChild(element);

  // This signifies that the promise of the splash screen has been
  // fulfilled.
  resolve();
}

function onResize() {
  ground.construct();
}

export function load(ele) {
  console.log("Splash screen loaded.");

  element = ele;
  element.appendChild(title.getContents());
  element.appendChild(ground.getContents());
  element.appendChild(blurb.getContents());

  ground.construct();

  keyboard.push({ handleKeyEvent });

  window.addEventListener("resize", onResize);

  // This will effectively make the load function return a Promise
  // only if the resolve() function has been called. And that only
  // happens if the ENTER key is pressed on the splash screen.
  return new Promise((r) => (resolve = r));
}
