const formShortenUrlEl = document.querySelector(".form-shorten-url");
const inputUrlEl = document.querySelector(".input-url");

inputUrlEl.addEventListener("blur", function (ev) {
  if (!ev.target.classList.contains("has-interacted")) ev.target.classList.add("has-interacted");
});

formShortenUrlEl.addEventListener("submit", function (ev) {
  ev.preventDefault();
});
