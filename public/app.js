const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
  document.title = "Hero";
});
