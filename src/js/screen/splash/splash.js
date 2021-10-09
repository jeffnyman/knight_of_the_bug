import * as title from "/title.js";

let element = null;

export function load(ele) {
  console.log("Splash screen loaded.");

  element = ele;
  element.appendChild(title.getContents());
}
