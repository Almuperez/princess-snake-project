
import { Actor, IActor } from "./Actor"
import { Point } from "../types/Point";
import { angleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";
import _ from "lodash"


type Size = { w: number; h: number };

export class Crown extends Actor implements IActor {
    crownSize: Size;
    crownColor: string;
    status: boolean;
    //origin: Point;
    // maxSpeed: number;
    // speed: Point;
    constructor(
        initialPos: Point = { x: _.random(0, 1024), y: _.random(0, 1024) }, size: Size = { w: 50, h: 50 },
    ) {
        super(initialPos);
        this.crownSize = size;
        this.crownColor = "pink";
        this.status = true;


        // this.origin = { x:initialPos.x, y: initialPos.y };
        // this.maxSpeed = initialMaxSpeed * 10;
        // this.speed = { x: this.maxSpeed, y: 0};
    };

    update(delta: number) {
        //x position

        // let newPosx = this.origin.x + this.speed.x * delta;
        // if (newPosx < 1024 && newPosx >= 0){
        //     this.origin.x = newPosx
        // }

        // //y position
        // let newposy = this.origin.y + this.speed.y * delta;
        // this.origin.y = newposy;
    }

    keyboard_event_down(key: string) {
        //hay que indicar == para que no lo iguale
        // if(key == "ArrowLeft"){
        //     this.position.x -= 30

        // }else if ((key == "ArrowRight")) {
        //     this.position.x += 30

        // } else if ((key == "ArrowUp")) {

        //     this.position.y -=30

        // }else if ((key == "ArrowDown")){

        //     this.position.y += 30;

        // }

    }



    draw(delta: number, ctx: CanvasRenderingContext2D) {
        if (this.status) {
            ctx.fillStyle = this.crownColor;
            //rotar cuadrado. translate tiene que estar por encima de rotate
            ctx.translate(this.position.x, this.position.y);
            //rotar canvas
            // ctx.rotate(angleToRad(this.angle));
            ctx.fillRect(
                //es negativo para desplazarme entre x e y 
                -this.crownSize.h / 2,
                -this.crownSize.w / 2,
                this.crownSize.h,
                this.crownSize.w,
            );
        }

    }
}


