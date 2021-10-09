const CONSUMERS = [];

function handler(e) {
  let consumer = CONSUMERS[CONSUMERS.length - 1];

  if (!consumer) {
    return;
  }

  consumer.handleKeyEvent(e);
}

export function isEnter(e) {
  if (e.type != "keydown") {
    return null;
  }

  return e.keyCode == 13;
}

export function pop() {
  CONSUMERS.pop();
}

export function push(consumer) {
  CONSUMERS.push(consumer);
}

document.addEventListener("keydown", handler);
