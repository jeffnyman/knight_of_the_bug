let element = document.createElement("div");

element.classList.add("ground");
element.innerHTML = "GROUND";

const GROUND = "xxxxxxxxxx";
const SPACING = "  ";

const KNIGHT = [
  "   .-.   ",
  " __|=|__ ",
  "(_/'-'\\_)",
  "//\\___/\\\\",
  "<>/   \\<>",
  " \\|_._|/ ",
  "  <_I_>  ",
  "   |||   ",
  "  /_|_\\  ",
];

const FLOWER = [
  "     ",
  "     ",
  "     ",
  "     ",
  "     ",
  " .:. ",
  "-=o=-",
  " ':' ",
  " \\|/ ",
];

function applyKnightColors(ch) {
  let color = "#aae";
  return `<span style="color:${color}">${ch}</span>`;
}

function applyFlowerColors(ch) {
  let color = "#f00";

  if (ch == "o") {
    color = "#ff0";
  }

  if (ch == "\\" || ch == "/" || ch == "|") {
    color = "lime";
  }

  ch = ch.replace(/</, "&lt;").replace(/>/, "&gt;");

  return `<span style="color:${color}">${ch}</span>`;
}

export function construct() {
  // The offsetWidth is a measurement in pixels of a given element's CSS
  // width. This includes any borders and padding but not margins. Here
  // the parent node would be the `game` div.
  let pixels = element.parentNode.offsetWidth;

  element.innerHTML = GROUND;

  // Say the pixels are 2189. With the calculation below, that would
  // give a "column" count of 219.
  let columns = Math.floor((GROUND.length * pixels) / element.offsetWidth) - 2;

  // The goal is to replace the schematic of the knight with a version that
  // has colors applied. Key to this is realizing that you don't call the
  // function that applies the colors as a function. Called as it is below,
  // the character being replaced will be passed to the function. In terms
  // of the replacement, the \S	refers to any non-whitespace character. The
  // g modifier is used to perform a global match, meaning find all matches
  // rather than stopping after the first match.
  let knight = KNIGHT.join("\n").replace(/\S/g, applyKnightColors).split("\n");

  // The same logic for the knight applies to the flower.
  let flower = FLOWER.join("\n").replace(/\S/g, applyFlowerColors).split("\n");

  // The goal now is to build up a "final view" of what the ground of the
  // splash screen will look like, given all the elements going on it. So a
  // "final view" will be built up that can ultimately be pushed as the set
  // of contents to render.
  let finalView = [];

  for (let i = 0; i < knight.length; i++) {
    let object_columns = columns;

    object_columns -= SPACING.length;

    // The knight will not have any specific styling to move it around the
    // screen relative to other elements. Thus the simple approach here is
    // to leave some spacing for the knight. What this is doing is saying
    // where, on the grass portion, the knight will appear. The same applies
    // to the flower.
    object_columns -= knight.length;
    object_columns -= flower.length - 4;

    // A row is now drawn with the knight. The spaces at the end are what
    // push the knight to the left of the splash screen.
    let row = `${SPACING}${knight[i]}${new Array(object_columns + 1).join(
      " "
    )}${flower[i]}`;

    finalView.push(row);
  }

  // The grass, which is the final element of the ground, is now added.
  let grassCount = `<span class='grass'>${new Array(columns + 1).join(
    "^"
  )}</span>`;

  finalView.push(grassCount);

  element.innerHTML = finalView.join("\n");
}

export function getContents() {
  return element;
}
