// import Ball from './lib/ball';

import GameView from  './lib/game_view';

// 1) make a game frame X
// 2) Select angle with keypress; show cast of path
// 3) shoot object at constant velocity

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  new GameView(ctx);
  // const ball = new Ball({});
  // setupBall(ctx, 100, 100);
  // document.addEventListener("keydown", e => changeAngle(ctx, e, 100, 100));
});

// let theta = 0;
//
// const calculateRadians = (rootX, x, rootY, y) => {
//   theta = Math.atan2(y - rootY, x - rootX);
//   return theta;
// };
//
// const setupBall = (ctx, ballX, ballY) => {
//   drawBall(ctx, ballX, ballY);
// };
//
// const drawBall = (ctx, x, y) => {
//   ctx.beginPath();
//   ctx.arc(x, y, 5, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.stroke();
// };
//
// let thetaDirection = 1;
// const changeAngle = (ctx, e, rootX, rootY) => {
//   ctx.clearRect(0, 0, 500, 500);
//   setupBall(ctx, 100, 100);
//   switch (e.key) {
//     case "s":
//     case "ArrowDown":
//       theta += thetaDirection * .017;
//       break;
//     case "w":
//     case "ArrowUp":
//       theta -= thetaDirection * .017;
//       break;
//     case "a":
//     case "ArrowLeft":
//       theta = Math.PI;
//       thetaDirection = -1;
//       break;
//     case "d":
//     case "ArrowRight":
//       thetaDirection = 1;
//       theta = 0;
//       break;
//     default:
//   }
//
//   const lineY = 150 * Math.sin(theta) + rootX;
//   const lineX = 150 * Math.cos(theta) + rootY;
//
//   ctx.beginPath();
//   ctx.moveTo(rootX, rootY);
//   ctx.lineTo(lineX, lineY);
//   ctx.stroke();
// };
