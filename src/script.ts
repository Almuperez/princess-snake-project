import { Actor, IActor } from "./actors/Actor";
import { Snake } from "./actors/Snake";
import { Crown } from "./actors/Crown";
import { FPSViewer } from "./actors/FPSViewer";
import { createGameManager, Manager } from "./actors/GameManager"

import { Pacman } from "./actors/Pacman";
// //import { Map } from "./actors/Map";
// //import { Circuit, createCircuit } from "./state/Circuit";
// import { MAP_A, MAP_B } from "./utils/keyboardMap";
//import { createTextChangeRange } from "typescript";

window.onload = () => {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  let fps = new FPSViewer({ x: 5, y: 15 });
  let snake = new Snake({ x: 0, y: 0 });
  let pacman = new Pacman({ x: 100, y: 300 });
  let crownArray = [new Crown(), new Crown(), new Crown(), new Crown()]

  createGameManager(snake);

  let actors: Array<IActor> = [
    fps,
    ...crownArray,
    snake,
  ];

  let lastFrame = 0;
  const render = (time: number) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => e.update(delta));
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    actors.forEach((e) => {
      ctx.save();
      e.draw(delta, ctx);
      ctx.restore();
    });
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
  document.body.addEventListener("keydown", (e) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_down) {
        actor.keyboard_event_down(e.key);
      }
    });
  });
};
