// Auto-update jaar in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener("scroll", function(){
  const nav = document.querySelector(".navbar");
  if(window.scrollY > 50){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Navbar menu open/close effect
const nav = document.querySelector(".navbar");
const navmenu = document.getElementById("navmenu");

if (nav && navmenu) {
  navmenu.addEventListener("show.bs.collapse", function () {
    nav.classList.add("menu-open");
  });
  navmenu.addEventListener("hide.bs.collapse", function () {
    nav.classList.remove("menu-open");
  });
}