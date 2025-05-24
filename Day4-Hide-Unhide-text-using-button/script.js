document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".collapse-button");
  const content = document.querySelector(".content");

  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    // if (content.style.display === "block") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "block";
    // REMOVE ALL THESE COMMENTS TO TRY OUT THE SAME FUNCTIONALITY JUST USING PURE JS }
  });
});
