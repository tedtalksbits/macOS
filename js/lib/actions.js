import { addClass, removeClass } from "./functions.js";

// close window - window is the great grandchild of the close button
export const closeBtns = document.querySelectorAll(".close");
closeBtns.forEach((btn) => {
  let window = btn.parentElement.parentElement.parentElement;
  btn.addEventListener("click", function () {
    removeClass("show", window);
  });
});

// min window
export const minBtns = document.querySelectorAll(".min");
minBtns.forEach((btn) => {
  let window = btn.parentElement.parentElement.parentElement;
  btn.addEventListener("click", function () {
    addClass("animate__zoomOutDown", window);
  });
});
// max window
export const maxBtns = document.querySelectorAll(".max");
maxBtns.forEach((btn) => {
  let window = btn.parentElement.parentElement.parentElement;
  btn.addEventListener("click", function () {
    window.classList.toggle("max");
    window.style.left = 0;
    window.style.right = 0;
    window.style.bottom = 0;
    window.style.top = "2rem";
    window.style.inset = "auto";
  });
});

// show window
export function showWindow(toggler, window) {
  toggler.addEventListener("click", function () {
    addClass("show", window);
    //     closeAppleMenu();
    removeClass("animate__zoomOutDown", window);
  });
}
