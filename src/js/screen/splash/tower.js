let element = document.createElement("div");

element.classList.add("tower");
element.innerHTML = "TOWER";

const LEVELS = new Array(11).join("\n");
const WIDTH = 13;

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

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function applyTowerColors(ch, index, str) {
  // These "default colors" will apply to any elements of the tower that
  // are not directly colored in the logic below. What this amounts to is
  // that the various separators will have slightly varying shades applied
  // to them. A way to see the effect is to just change the list provided
  // to something like: ["blue", "red", "purple"].
  let color = get_random(["#888", "#aaa", "#999"]);
  let transparent = false;

  switch (ch) {
    case "?":
      color = "red";
      transparent = true;
      break;
    case "#":
      color = get_random(["#383", "#262"]);
      break;
    case "*":
      color = "pink";
      break;
    case "/":
    case "\\":
      // This is handling the grass at the base of the tower.
      if (str.charAt(index - 1) == ch || str.charAt(index + 1) == ch) {
        color = "lime";
        transparent = true;
      }
      break;
  }

  // This bit just handles the very top of the tower.
  if (ch == "_" && str.charAt(index - 1) == " ") {
    transparent = true;
  }

  return `<span style="color:${color}" ${
    transparent ? "class='transparent'" : ""
  }>${ch}</span>`;
}

function build_middle_levels() {
  // The goal here is to construct the middle levels of the tower, which
  // means everything between the TOP and BOTTOM.

  let towerLevels = "";
  let separatorDistance = 0;
  let dataDistance = 0;

  // The "13" value for WIDTH can seem a bit odd. The idea is that this
  // function returns the towerLevels with 8 values already filled in.
  // So the WIDTH is the part in between the tower preset walls. For
  // example, here is a segment
  //
  // "   [__]|     ||#_]   "
  // In this function, the return includes the following part:
  //
  // "   [             ]   "
  //
  // In between those brackets is 13, hence the WIDTH value.
  for (let i = 0; i < WIDTH; i++) {
    let ch = "";
    let separatorChance = (separatorDistance - 0.5) / 3;
    let dataChance = (dataDistance + 1) / 15;

    if (Math.random() < separatorChance) {
      ch = get_random(["I", "]", "["]);
      separatorDistance = 0;
    } else {
      ch = "_";
      separatorDistance++;
    }

    if (Math.random() < dataChance) {
      ch = get_random(["#", "#", "*"]);
      dataDistance = 0;
    } else {
      dataDistance++;
    }

    towerLevels += ch;
  }

  return `   [${towerLevels}]   `;
}

export function construct() {
  // The offsetHeight is a measurement in pixels of a given element's CSS
  // width. This includes any borders and padding but not margins. Here
  // the parent node would be the `game` div.
  let pixels = element.parentNode.offsetHeight;

  element.innerHTML = LEVELS;

  // Say the pixels are 875. With the calculation below, that would
  // give a "row" count of 37.
  let rows = Math.floor((LEVELS.length * pixels) / element.offsetHeight) - 4;

  // The top and bottom of the tower will be provided already so
  // that has to be accounte for in the rows. So if there were 37
  // rows, this would remove 10 of them, which account for the
  // top and bottom rows of the tower that are already provided.
  rows -= TOP.length;
  rows -= BOTTOM.length;

  let all_levels = TOP.slice();

  // Assuming the rows are 27, then this loop is going to produce 351
  // values (27 [rows] * 13 [width]). With the above calculation, this
  // means 27 rows have to be accounted for. Thus 351 is the amount of
  // characters in between the outer walls of the tower (plus the
  // spaces) which are already accounted for.
  for (let i = 0; i < rows; i++) {
    all_levels.push(build_middle_levels());
  }

  all_levels = all_levels.concat(BOTTOM);

  element.innerHTML = all_levels.join("\n").replace(/\S/g, applyTowerColors);
}

export function getContents() {
  return element;
}
