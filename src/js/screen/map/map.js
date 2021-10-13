import Grid from "utilities/grid.js";

let display = new ROT.Display();
let options = {};

function construct() {
  let node = display.getContainer();
  // This will be the map div.
  let parent = node.parentNode;

  let grid_space = new Grid(parent.offsetWidth, parent.offsetHeight);
  console.log(grid_space);

  // If the parent has a width of 720 and a height of 378, that means
  // the size of the grid will have its maximum width/height computed
  // to fit into some set of constraints. What this will return is the
  // maximum cell width and hight. That would be 80 and 25.
  let grid_size = display.computeSize(grid_space.x, grid_space.y);
  console.log(grid_size);

  // Here we get a little padding for the grid. So if the values were
  // 80 and 25, they would now be 81 and 27.
  grid_size[0] += grid_size[0] % 2 ? 2 : 1;
  grid_size[1] += grid_size[1] % 2 ? 2 : 1;

  console.log(grid_size[0]);
  console.log(grid_size[1]);

  options.width = grid_size[0];
  options.height = grid_size[1];

  display.setOptions(options);
}

export function setup(parent) {
  parent.appendChild(display.getContainer());

  construct();
}
