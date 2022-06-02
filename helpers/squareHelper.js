export function startPointPicker(target) {
  document.querySelectorAll(`[start]`).forEach((element) => {
    element.removeAttribute("start");
  });

  let activeButtons = document.getElementsByClassName("active-button");
  for (let i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove("active-button");
    i--;
  }

  target.setAttribute("start", true);
  target.classList.add("start-point");
}
