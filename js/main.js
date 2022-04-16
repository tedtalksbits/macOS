import { dragEl } from "./app/draggableElement.js";
import { wallpapers } from "./data.js";
import { showWindow } from "./lib/actions.js";
import { addClass, removeClass } from "./lib/functions.js";
import { about_window_elements } from "./pages.js";

/************************** Apple Logo Menu **************************/
const apple_menu = document.getElementById("apple_menu");
const apple_logo = document.getElementById("apple_logo");
let apple_menu_items = document.querySelectorAll(".menu-item");

apple_menu_items.forEach((item) =>
  item.addEventListener("click", () => removeClass("show", apple_menu))
);
// toggle apple menu
apple_logo.addEventListener("click", showAppleMenu);
function showAppleMenu() {
  apple_menu.classList.toggle("show");
}
export function closeAppleMenu() {
  removeClass("show", apple_menu);
}

/************************** Window Functions **************************/

// windows
const about_window = document.getElementById("about_window");
const system_window = document.getElementById("system_window");
const appstore_window = document.getElementById("appstore_window");

// window togglers
const about_window_toggle = document.getElementById("about_window_toggle");
const system_window_toggle = document.getElementById("system_window_toggle");
const appstore_window_toggle = document.getElementById(
  "appstore_window_toggle"
);

showWindow(about_window_toggle, about_window);
showWindow(system_window_toggle, system_window);
showWindow(appstore_window_toggle, appstore_window);

/************************** Draggable headers **************************/

// headers - element to use drag window
const about_window_header = document.getElementById("about_window_header");
const system_window_header = document.getElementById("system_window_header");
const appstore_window_header = document.getElementById(
  "appstore_window_header"
);

// make window draggable
dragEl(about_window, about_window_header);
dragEl(system_window, system_window_header);
dragEl(appstore_window, appstore_window_header);

/************************** Wallpapers **************************/

const wallpaper_imgs_element = document.getElementById("wallpaper_imgs");
wallpapers.map((wallpaper) => {
  const imgElement = `<img src=${wallpaper} alt="background" class="wallpaperImg"/>`;
  wallpaper_imgs_element.innerHTML += imgElement;
});

/************************** Change wallpaper **************************/
const body = document.querySelector("body");
const wallpaperImg = document.querySelectorAll(".wallpaperImg");

wallpaperImg.forEach((e) => {
  e.addEventListener("click", function () {
    body.style.backgroundImage = `url(${e.src})`;
  });
});

/************************** datetime **************************/
setInterval(() => {
  const date = new Date().toLocaleDateString();
  const dateElement = document.getElementById("date");
  dateElement.textContent = date;
  const today = new Date().toLocaleTimeString();
  const time = document.getElementById("time");
  time.textContent = today;
}, 1000);

/************************** pagination and build menus **************************/
let currentIndex = 0;
const about_window_body = document.getElementById("about_window_body");
const tabs = document.querySelectorAll(".tab");
const about_window_body_content = about_window_elements;
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    currentIndex = tab.dataset.index;
    tabs.forEach((tb) => removeClass("active", tb));
    this.classList.add("active");
    about_window_body.innerHTML = about_window_body_content[currentIndex];
  });
});
about_window_body.innerHTML = about_window_body_content[currentIndex];

/**************************
 *
 *
 * TODO: function to add minimized window to dock
 * TODO: more windows
 * TODO: window active and inactive state ?
 * TODO: logout to windows ?
 *
 *
 *  **************************/
