import { Actor, IActor } from "./actors/Actor";
// //import { Crown } from "./actors/Crown";
import { Snake } from "./actors/Snake";
import { FPSViewer } from "./actors/FPSViewer";
import { Crown } from "./actors/Crown2";

// //import { Map } from "./actors/Map";
//import { Pacman } from "./actors/Pacman";
// //import { Circuit, createCircuit } from "./state/Circuit";
// import { MAP_A, MAP_B } from "./utils/keyboardMap";

//import { createTextChangeRange } from "typescript";


window.onload = () => {
var canvas = document.getElementById("canvas") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let fps = new FPSViewer({x: 5, y: 15});
let snake = new Snake({x: 0, y: 0}) ;
let crown = new Crown({x: 100, y: 200});

//createCircuit(snake);

let actors: Array<IActor> = [
    fps,
    snake,
    crown,
    //new Crown ({x: 200, y:100})

];

let lastFrame = 0;
const render = (time: number) => {
    actors = [fps, snake];
    let delta =(time - lastFrame) / 1000;
    //console.log(actors.length)
    lastFrame = time;
    actors.forEach((e) => e.update(delta));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    actors.forEach((e) => {
    //save antes de pintar gaurda una foto del canvas y despues pinta
        ctx.save();
        e.draw(delta, ctx);
    //me traigo el canvas que habia guardado antes despues de pintar
        ctx.restore();
    });
    window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
document.body.addEventListener("keydown", (e) =>{
    actors.forEach((actor)=>{
        if (actor.keyboard_event_down) {
            actor.keyboard_event_down(e.key)
        }
    });
});

}
