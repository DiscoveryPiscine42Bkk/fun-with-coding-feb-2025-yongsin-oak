const title = document.querySelector(".title");
const cardOak = document.querySelector(".card#oak");
const cardJeno = document.querySelector(".card#jeno");

cardOak.addEventListener("mouseover", () => {
  title.textContent = "Choose Oak?";
});

cardOak.addEventListener("mouseout", () => {
  title.textContent = "Can you choose?";
});

cardJeno.addEventListener("mouseover", () => {
  title.textContent = "Choose Jeno?";
});

cardJeno.addEventListener("mouseout", () => {
  title.textContent = "Can you choose?";
});
