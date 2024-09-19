const moon = document.querySelector(".theme-btn");
const items = document.querySelectorAll(
  "body"
);
moon.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  moon.classList.toggle("active");
});