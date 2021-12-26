import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { angleToRad } from "../utils/angleToRad";
import { checkLimits } from "../utils/checkLimits";
import { snakekey, KeyboardMap } from "../utils/keyboardMap";
const ferrariImg = require("../assets/ferrari.png");

type Size = { w: number; h: number };

export class Snake extends Actor implements IActor {
	snakeSize: Size;
	snakeColor: string;
	angle: number;
	angleSpeed: number;
	snakeSpeed: number;
	snakeAcceleration: number;
	image: HTMLImageElement;
	keyboardMap: KeyboardMap;
	constructor(
		initialPos: Point,
		keyboardMap: KeyboardMap,
		size: Size = { w: 50, h: 100 },
	) {
		super(initialPos);
		this.keyboardMap = keyboardMap;
		this.snakeSize = size;
		this.snakeColor = "red";
		this.angle = 0;
		this.angleSpeed = 0;
		this.snakeSpeed = 0;
		this.snakeAcceleration = 0;

		// snake image
		this.image = new Image();
		//cambiar ferraiImg por Snakeimg
		this.image.src = ferrariImg;
	}
	update(delta: number) {
		this.angle += this.angleSpeed;
		this.angleSpeed *= 0.9;
		// Establecemos una velocidad en relación a la aceleración
		this.snakeSpeed = this.snakeSpeed * 0.9 + this.snakeAcceleration;
		// console.log(this.carSpeed);
		let newPos: Point = {
			x: this.position.x + Math.cos(angleToRad(this.angle)) * this.snakeSpeed,
			y: this.position.y + Math.sin(angleToRad(this.angle)) * this.snakeSpeed,
		};
		if (checkLimits(newPos)) {
			this.position = newPos;
		}
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.snakeColor;
		ctx.translate(this.position.x, this.position.y);
		ctx.rotate(angleToRad(this.angle));
		ctx.rotate(angleToRad(180));
		// Generar un fillRect para dibujar un rectangulo relleno en la posicion (x, y) para determinar el relleno generar un fillStyle
		//void ctx.fillRect(x, y, width, height);
	}
	// keyboard_event_down(key: string) {
	// 	let tecla = this.keyboardMap[key];
	// 	if (tecla == snakekey.LEFT) {
	// 		this.angleSpeed -= 4;
	// 	} else if (tecla == snakekey.RIGHT) {
	// 		this.angleSpeed += 4;
	// 	} else if (tecla == snakekey.UP) {
	// 		this.snakeAcceleration = 0.5;
	// 	} else if (tecla == snakekey.DOWN) {
	// 		this.snakeAcceleration = -0.5;
	// 	}
	// }
	// keyboard_event_up(key: string) {
	// 	let tecla = this.keyboardMap[key];
	// 	if (tecla == snakekey.UP) {
	// 		this.sankeAcceleration = 0;
	// 	} else if (tecla == snakekey.DOWN) {
	// 		this.snakeAcceleration = 0;
	// 	}
	// }
}
