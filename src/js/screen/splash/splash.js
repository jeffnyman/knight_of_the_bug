import * as title from "/title.js";
import * as keyboard from "utilities/keyboard.js";

let element = null;

function handleKeyEvent(e) {
  // The only keypress that matters here is ENTER.
  if (!keyboard.isEnter(e)) {
    return;
  }

  keyboard.pop();

  element.parentNode.removeChild(element);
}

export function load(ele) {
  console.log("Splash screen loaded.");

  element = ele;
  element.appendChild(title.getContents());

  keyboard.push({ handleKeyEvent });
}
