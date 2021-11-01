let element;
let current = null;

String.format = function () {
  var s = arguments[0];
  for (var i = 0; i < arguments.length - 1; i += 1) {
    var reg = new RegExp("\\{" + i + "\\}", "gm");
    s = s.replace(reg, arguments[i + 1]);
  }
  return s;
};

export function pause() {
  if (current && current.childNodes.length == 0) {
    return;
  }

  current = document.createElement("p");

  element.appendChild(current);

  while (element.childNodes.length > 50) {
    element.removeChild(element.firstChild);
  }
}

export function add() {
  let str = String.format.apply(String, arguments);
  console.log(str);

  str = str.replace(/{(.*?)}(.*?){}/g, (match, color, str) => {
    return `<span style="color:${color}">${str}</span>`;
  });

  str = str.replace(/\n/g, "<br/>");

  let log_text = document.createElement("span");
  log_text.innerHTML = `${str} `;

  current.appendChild(log_text);
}

export function setup(parent) {
  element = parent;
  element.classList.remove("hidden");

  console.log(element);

  pause();

  setInterval(() => {
    element.scrollTop += 3;
  }, 20);
}
