let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

window.addEventListener("load", () => {
  const gameManager = new GameManager();

  gameManager.setupLevel();

  const loop = () => {
    gameManager.render();
    gameManager.update();
    window.requestAnimationFrame(loop);
  }

  loop();
});
