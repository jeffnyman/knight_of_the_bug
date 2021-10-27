export function setup(parent) {
  let heading = document.createElement("p");
  heading.innerHTML = "Game of Tests";

  parent.appendChild(heading);

  console.log(parent);
}
