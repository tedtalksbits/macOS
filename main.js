/************************** Custom DOM Functions **************************/
function addClass(className, element) {
   element.classList.add(className);
}
function removeClass(className, element) {
   element.classList.remove(className);
}

/************************** Apple Logo Menu **************************/
const apple_menu = document.getElementById("apple_menu");
const apple_logo = document.getElementById("apple_logo");

// toggle apple menu
apple_logo.addEventListener("click", showAppleMenu);
function showAppleMenu() {
   apple_menu.classList.toggle("show");
}
function closeAppleMenu() {
   apple_menu.classList.remove("show");
}

/************************** Window Functions **************************/

// windows
const about_window = document.getElementById("about_window");
const system_window = document.getElementById("system_window");

// window togglers
const about_window_toggle = document.getElementById("about_window_toggle");
const system_window_toggle = document.getElementById("system_window_toggle");

// show window
function showWindow(toggler, window) {
   toggler.addEventListener("click", function () {
      window.classList.add("show");
      closeAppleMenu();
      removeClass("animate__zoomOutDown", window);
   });
}
showWindow(about_window_toggle, about_window);
showWindow(system_window_toggle, system_window);

// close window - window is the great grandchild of the close button
const closeBtns = document.querySelectorAll(".close");
closeBtns.forEach((btn) => {
   let window = btn.parentElement.parentElement.parentElement;
   btn.addEventListener("click", function () {
      removeClass("show", window);
   });
});

// min window
const minBtns = document.querySelectorAll(".min");
minBtns.forEach((btn) => {
   let window = btn.parentElement.parentElement.parentElement;
   btn.addEventListener("click", function () {
      addClass("animate__zoomOutDown", window);
   });
});
// max window
const maxBtns = document.querySelectorAll(".max");
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

/************************** Draggable Functions **************************/

// headers - element to use drag window
const about_window_header = document.getElementById("about_window_header");
const system_window_header = document.getElementById("system_window_header");

// make window draggable
dragEl(about_window, about_window_header);
dragEl(system_window, system_window_header);

// make window draggable function
function dragEl(el, draggableHeader) {
   let pos1 = 0;
   let pos2 = 0;
   let pos3 = 0;
   let pos4 = 0;

   if (draggableHeader) {
      draggableHeader.onmousedown = dragMouseDown;
   }
   function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
   }
   function elementDrag(e) {
      //    close apple menu
      closeAppleMenu();

      // if window is maximized, disable drag event
      if (el.classList.contains("max")) {
         return;
      }
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      el.style.top = el.offsetTop - pos2 + "px";
      el.style.left = el.offsetLeft - pos1 + "px";
   }

   function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
   }
}

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

/************************** pagination **************************/
let currentIndex = 0;
const about_window_body = document.getElementById("about_window_body");
const tabs = document.querySelectorAll(".tab");
const about_window_body_content = [
   `<div class="img">
      <img
      class="rounded"
         src="https://images.unsplash.com/photo-1642590044683-d72bfab9eb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
         alt="aurora"
      />
   </div>
   <div class="infotext">
      <h2>100devsOS <span>Monterey</span></h2>
      <small>Version 12.2.1</small>
      <span>Macbook Pro (15-inch, 2018)</span>
      <span
         >Processor &ensp;2.6 Ghz 6-core Intel Core i7</span
      >
      <span>Memory &ensp; 16 GB 2400 MHz DDR4</span>
      <span>Startup Disk &ensp; Macintosh HD</span>
      <span>Graphics &ensp; Radeon Pro 560X 4GB</span>
      <span>Serial Number &ensp; BLINK184</span>
      <div class="button-stackH">
         <button>System Report...</button>
         <button>Software Update...</button>
      </div>
   </div>
   `,
   `<div class="img" style="
         text-align: center;
         display: flex;
         flex-direction:column;"
   >
      <img src="images/macbook.png" />
      <h4>Built-in Retina Display</h4>
      <span>15.4-inch (2880 x 1800)</span>
   </div>
   `,
   `
   <div class="flex-h" style="width: 90%; gap: 1rem;">
      <div class="img">
         <img
            src="images/hd.png"
            style="height: 75px;"
         />
      </div>
      <div class="flex-v" style="width: 100%;">
         <small class="py-s">Macintosh HD</small>
         <small class="py-s">296 GB available of 499.96</small>
         <div class="progress-bar">
         <div class="yellow" style="width: 20%;"></div>
            <div class="blue" style="width: 8%;"></div>
            <div class="pink" style="width: 13%;"></div>
         </div>
      </div>
   </div>
   `,
   `
   <div style="text-align:center;">
      <div class="animateOut delay-1">
         <img src="images/spinner.gif" alt="loading.." style="height: 57px;" />
      </div>
      <div class="animateIn delay-1">
         <h3>Hello,</h3>
         <p>Welcome to your MacBook Support <i class="fa fa-trademark" aria-hidden="true"></i></p>
      </div>
      <div class="animateIn delay-2 my-xl" >
         <p>How may I assist you?</p>
      </div>
   </div>
   `,
   `
   <div style="text-align:center;">
      <div class="animateOut delay-1">
         <img src="images/spinner.gif" alt="loading.." style="height: 57px;" />
      </div>
      <div class="animateIn delay-1">
         <h3>No resourses found</h3>
      </div>
   </div>
   `,
];
console.log(tabs);
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
