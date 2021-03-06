import GameView from  './lib/game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  canvas.tabIndex = 1;

  new GameView(ctx);
});
