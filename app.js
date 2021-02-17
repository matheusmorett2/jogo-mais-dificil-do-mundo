let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

window.addEventListener("load", () => {
  const gameManager = new GameManager();

  gameManager.setupLevel();
  gameManager.render();
});
