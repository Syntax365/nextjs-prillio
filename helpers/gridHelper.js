export function startPointClick(event) {
  const classList = event.target.classList;

  if (classList.contains("active-button")) {
    event.target.classList.remove("active-button");
  } else {
    classList.add("active-button");

    let oldStarts = document.getElementsByClassName("start-point");
    for (let i = 0; i < oldStarts.length; i++) {
      oldStarts[i].classList.remove("start-point");
      i--;
    }
  }

  return;
}

export function clearGraph() {
  let clearArr = document.querySelectorAll("[value]");
  clearArr.forEach((node) => {
    node.classList.remove("color-purple");
    node.classList.remove("color-pink");
    node.classList.remove("wall");
    node.setAttribute("value", 0);
  });
}

export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
