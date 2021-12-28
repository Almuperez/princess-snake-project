
import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { angleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";


type Size = { w: number; h:number };

export class Crown extends Actor implements IActor {
    crownSize: Size;
    crownColor: string;
    constructor(
        initialPos: Point, size: Size = {w:50, h:50}
        ){
        super(initialPos);
        this.crownSize = size;
        this.crownColor = "pink";
    };

    update(delta: number){}


    keyboard_event_down(key: string){}


    draw(delta: number, ctx: CanvasRenderingContext2D){
        ctx.fillStyle = this.crownColor;
        ctx.fillRect (
           -this.crownSize.h/2,
           -this.crownSize.w/2,
           this.crownSize.w,
           this.crownSize.h,
    );
    }
}
