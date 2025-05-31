const sticky = document.getElementById("nav-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    sticky.classList.add("visible");
  } else {
    sticky.classList.remove("visible");
  }
});
