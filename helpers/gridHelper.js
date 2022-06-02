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
