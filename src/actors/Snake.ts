
import { SynthesizedComment } from "typescript";
import { Point } from "../types/Point";
import { Actor, IActor } from "./Actor";

type Size = { w: number; h:number };

export class Snake extends Actor implements IActor {
    snakeSize: Size;
    snakeColor: string;
    //creamos angle para generar un angulo que por defecto será e 0
    angle: number;
    constructor(initialPos: Point, size: Size ={w: 50, h: 50}){
        super(initialPos);
        this.snakeSize = size;
        this.snakeColor = "green";
        this.angle = 0;
    }

    update(delta: number){
        console.log(this.angle);
    }
    draw(delta: number, ctx: CanvasRenderingContext2D){
        ctx.fillStyle = this.snakeColor;
        ctx.fillRect(
            this.position.x,
            this.position.y,
            this.snakeSize.w,
            this.snakeSize.h,
            );
    }
    keyboard_event(key: string) {

        //hay que indicar == para que no lo iguale
        if((key == "ArrowLeft")){
            this.angle -= 5

        }else if ((key == "ArrowRight")) {
            this.angle += 5

        } else if ((key == "ArrowUp")) {

        }else if ((key == "ArrowDown")){

        }
        
    }
    

}



// import { Actor, IActor } from "./Actor";
// import { Point } from "../types/Point";
// import { angleToRad } from "../utils/angleToRad";
// import { checkLimits } from "../utils/checkLimits";
// import { snakekey, KeyboardMap } from "../utils/keyboardMap";
// const ferrariImg = require("../assets/ferrari.png");

