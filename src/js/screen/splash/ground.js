let element = document.createElement("div");

element.classList.add("ground");
element.innerHTML = "GROUND";

const GROUND = "xxxxxxxxxx";

export function construct() {
  // The offsetWidth is a measurement in pixels of a given element's CSS
  // width. This includes any borders and padding but not margins. Here
  // the parent node would be the `game` div.
  let pixels = element.parentNode.offsetWidth;

  element.innerHTML = GROUND;

  // Say the pixels are 2189. With the calculation below, that would
  // give a "column" count of 219.
  let columns = Math.floor((GROUND.length * pixels) / element.offsetWidth) - 2;

  // Now the grass can be added, using the number calculated above to
  // span the length of the screen.
  let grass = [];

  let grassCount = `<span class='grass'>${new Array(columns + 1).join(
    "^"
  )}</span>`;

  grass.push(grassCount);

  element.innerHTML = grass.join("\n");
}

export function getContents() {
  return element;
}
