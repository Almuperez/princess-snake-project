import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { angleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";

type Size = { w: number; h: number };

export class Snake extends Actor implements IActor {
  snakeSize: Size;
  snakeColor: string;
  origin: Point;
  maxSpeed: number;
  speed: Point;
  constructor(
    initialPos: Point,
    color = "green",
    size: Size = { w: 20, h: 20 },
    initalMaxSpeed = 10
  ) {
    super(initialPos);
    this.snakeSize = size;
    this.snakeColor = color;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.maxSpeed = initalMaxSpeed * 10;
    this.speed = { x: this.maxSpeed, y: 0 };
  }

  update(delta: number) {
    let newPosX = this.position.x + this.speed.x * delta;
    if (newPosX < 500 && newPosX >= 0) {
      this.position.x = newPosX;
    }

    let newPosY = this.position.y + this.speed.y * delta;
    this.position.y = newPosY;
  }

  //grownsnake crecer y velocidad
  growSnake() {
    const sizesnake = this.snakeSize;
    this.snakeSize = { w: sizesnake.w + 10, h: sizesnake.h };
    this.maxSpeed = this.maxSpeed * 1.005;
  }

  keyboard_event_down(key: string) {
    switch (key) {
      case `ArrowRight`:
        console.log("right");
        this.speed.x = this.maxSpeed;
        this.speed.y = 0;
        break;
      case `ArrowLeft`:
        console.log("left");
        this.speed.x = -this.maxSpeed;
        this.speed.y = 0;
        break;
      case `ArrowUp`:
        console.log("up");
        this.speed.y = -this.maxSpeed;
        this.speed.x = 0;
        break;
      case `ArrowDown`:
        console.log("down");
        this.speed.y = this.maxSpeed;
        this.speed.x = 0;
        break;
    }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.snakeColor;
    ctx.translate(this.position.x, this.position.y);
    ctx.fillRect(
      -this.snakeSize.h / 2,
      -this.snakeSize.w / 2,
      this.snakeSize.h,
      this.snakeSize.w
    );
  }
}
