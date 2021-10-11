let element = document.createElement("div");

element.classList.add("tower");
element.innerHTML = "TOWER";

const LEVELS = new Array(11).join("\n");

const TOP = [
  " _     _     _     _ ",
  "[_]___[_]___[_]___[_]",
  "[__#__][__#I_]__I__#]",
  "[_I_#_I__*[__]__#_*_]",
  "   [_]_#_]__I_#__]   ",
  "   [I_|/     \\|*_]   ",
  "   [#_||  ?  ||_#]   ",
  "   [_I||     ||_#]   ",
  "   [__]|     ||#_]   ",
];

const BOTTOM = [" \\\\[__]#_I__][__#]// "];

function build_middle_levels() {
  // The goal here is to construct the middle levels of the tower, which
  // means everything between the TOP and BOTTOM.
}

export function construct() {
  // The offsetWidth is a measurement in pixels of a given element's CSS
  // width. This includes any borders and padding but not margins. Here
  // the parent node would be the `game` div.
  let pixels = element.parentNode.offsetWidth;

  element.innerHTML = LEVELS;

  // Say the pixels are 2189. With the calculation below, that would
  // give a "row" count of 100.
  let rows = Math.floor((LEVELS.length * pixels) / element.offsetHeight) - 4;

  console.log(TOP.length); // 9
  console.log(BOTTOM.length); // 1

  rows -= TOP.length;
  rows -= BOTTOM.length;

  console.log(rows); // 90

  let all_levels = TOP.slice();

  for (let i = 0; i < rows; i++) {
    all_levels.push(build_middle_levels());
  }
}

export function getContents() {
  return element;
}
