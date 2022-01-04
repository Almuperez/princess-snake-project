import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { Snake } from "./Snake";
import { angleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";
import _ from "lodash";
import { createGameManager, Manager } from "../state/GameManager";
import { addEmitHelper } from "typescript";
const crownimg = require("../assets/Crown.png");

type Size = { w: number; h: number };

export class Crown extends Actor {
  crownSize: Size;
  crownColor: string;
  //Le paso el actor snake para poder hacer el update con la distancia
  snake: IActor;
  status: boolean;
  image: HTMLImageElement;
  constructor(
    snake: IActor,
    initialPos: Point = { x: _.random(0, 500), y: _.random(0, 500) },
    size: Size = { w: 20, h: 20 }
  ) {
    super(initialPos);
    this.crownSize = size;
    this.crownColor = "pink";
    this.snake = snake;
    this.status = true;

    //crown image
    this.image = new Image();
    this.image.src = crownimg;
  }

  update(delta: number) {
    let snakePos = this.snake.position;
    let crownPos = this.position;
    let distance = 0;
    if (snakePos) {
      distance = Math.sqrt(
        Math.pow(crownPos.x - snakePos.x, 2) +
          Math.pow(crownPos.y - snakePos.y, 2)
      );
    }
    //math.floor es un metodo que si es 30.9 lo redondea a 30. metodo que redondea hacia abajo
    if (Math.floor(distance) == 30) {
      this.position = { x: _.random(0, 500), y: _.random(0, 500) };
      Manager.addPoint();
      if (this.snake.growSnake) {
        this.snake.growSnake();
      }
      // this.snake.grownSnake();
    }
  }

  keyboard_event_down(key: string) {}

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    if (this.status) {
      ctx.fillStyle = this.crownColor;
      ctx.drawImage(this.image, this.position.x, this.position.y, 40, 20);

      ctx.translate(this.position.x, this.position.y);
      // ctx.fillRect(
      //   -this.crownSize.h / 2,
      //   -this.crownSize.w / 2,
      //   this.crownSize.h,
      //   this.crownSize.w
      // );
    }
  }
}
