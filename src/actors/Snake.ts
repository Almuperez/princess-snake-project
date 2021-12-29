
import { Actor, IActor } from "./Actor"
import { Point } from "../types/Point";
import { angleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";


type Size = { w: number; h:number };

export class Snake extends Actor implements IActor {
    snakeSize: Size;
    snakeColor: string;
    // origin: Point
    // maxSpeed: number;
    // speed: Point;
    constructor(
        initialPos: Point, color = "green", size: Size ={w: 100, h: 50}, initalMaxSpeed = 10){
        super(initialPos);
        this.snakeSize = size;
        this.snakeColor = color;
        // this.origin = {x: initialPos.x, y: initialPos.y};
        // this.maxSpeed = initalMaxSpeed * 10;
        // this.speed = { x: this.maxSpeed, y: 0};
    };

    update(delta: number){
    //   let newPosX = this.origin.x + this.speed.x * delta;
    //   if(newPosX < 1024 && newPosX >= 0){
    //       this.origin.x = newPosX
    //   }

    //   let newPosY = this.position.y + this.speed.y * delta;
    //   this.origin.y = newPosY

    }

    keyboard_event_down(key: string) {
        //hay que indicar == para que no lo iguale
        if(key == "ArrowLeft"){
            this.position.x -= 30

        }else if ((key == "ArrowRight")) {
            this.position.x += 30

        } else if ((key == "ArrowUp")) {

            this.position.y -=30

        }else if ((key == "ArrowDown")){

            this.position.y += 30;

        }
        // switch(key) {
        //     case `ArrowRight`:
        //         console.log("right");
        //         this.speed.x += this.maxSpeed;
        //         this.speed.y = 0;
        //         break;
        //     case `ArrowLeft`:
        //         console.log("left");
        //         this.speed.x -= this.maxSpeed;
        //         this.speed.y = 0;
        //         break;
        //     case`ArrowUp`:
        //         console.log("Up");
        //         this.speed.x -= this.maxSpeed;
        //         this.speed.y = 0;
        //     case `ArrowDown`:
        //         console.log("Down");
        //         this.speed.y += this.maxSpeed;
        //         this.speed.x = 0;
        //         break;
        // }
        
    }
    
    draw(delta: number, ctx: CanvasRenderingContext2D){

        // let origin = this.origin;
        // let snakeSize = this.snakeSize;
        
        // let direction = 0;
        // if(this.speed.x != 0 && this.speed.x < 0){
        //     direction = 180;
        // }
        // if (this.speed.y != 0 && this.speed.y < 0){
        //     direction = -90;
        // }
        // if (this.speed.y != 0 && this.speed.y > 0){
        //     direction = 90;
        // }

        ctx.fillStyle = this.snakeColor;
        ctx.translate(this.position.x, this.position.y);
        // ctx.rotate(angleToRad(this.angle));
        ctx.fillRect(
    //es negativo para desplazarme entre x e y 
            -this.snakeSize.h/ 2,
            -this.snakeSize.w/ 2,
            // this.position.x,
            // this.position.y,
            this.snakeSize.h,
            this.snakeSize.w,
            );
    }


}


