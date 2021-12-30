import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { Snake } from "./Snake";
import { angleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";
import _ from "lodash";

type Size = { w: number; h: number };

export class Crown extends Actor {
  crownSize: Size;
  crownColor: string;
  //Le paso el actor snake para poder hacer el update con la distancia
  snake: IActor;
  status: boolean;
  constructor(
    snake: IActor,
    initialPos: Point = { x: _.random(0, 1024), y: _.random(0, 1024) },
    size: Size = { w: 50, h: 50 },
  ) {
    super(initialPos);
    this.crownSize = size;
    this.crownColor = "pink";
    this.snake = snake;
    this.status = true;

  }

  update(delta: number) {
    let snakePos = this.snake.position;
    let crownPos = this.position;
    let distance = 0;
    if (snakePos) {
      distance = Math.sqrt(
        Math.pow(crownPos.x - snakePos.x, 2) + Math.pow(crownPos.y - snakePos.y, 2),

      );
    }
    /*let distance = Math.sqrt(
      Math.pow(crownPos.x - snakePos.x, 2) + Math.pow(crownPos.y - snakePos.y, 2),

    );*/
    if (distance < 30) {
      this.status = false;
      //       //ver video esta parte no entiendo bien de donde sale barrierindex

    }
  }

  keyboard_event_down(key: string) { }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    if (this.status) {
      ctx.fillStyle = this.crownColor;
      //rotar cuadrado. translate tiene que estar por encima de rotate
      ctx.translate(this.position.x, this.position.y);
      //this.status? (ctx.fillStyle = this.crownColor) : (ctx.fillStyle = "red")
      //rotar canvas
      // ctx.rotate(angleToRad(this.angle));
      ctx.fillRect(
        //es negativo para desplazarme entre x e y
        -this.crownSize.h / 2,
        -this.crownSize.w / 2,
        this.crownSize.h,
        this.crownSize.w
      );
    }
  }
}
