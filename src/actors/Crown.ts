import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { Snake } from "./Snake";
import { angleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";
import _ from "lodash";
import { createGameManager, Manager } from "../state/GameManager";
import { addEmitHelper } from "typescript";

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
    if (distance < 30) {
      //Manager.addPoint() && new crownPos;
      this.status = false;
    }
      } 
    

  keyboard_event_down(key: string) { }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    if (this.status) {
      ctx.fillStyle = this.crownColor;
      
      ctx.translate(this.position.x, this.position.y);
      ctx.fillRect(
        -this.crownSize.h / 2,
        -this.crownSize.w / 2,
        this.crownSize.h,
        this.crownSize.w
      );
    }
  }
}
