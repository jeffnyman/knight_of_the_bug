let element = document.createElement("div");

element.classList.add("title");
element.innerHTML = "TITLE";

export function getContents() {
  return element;
}
