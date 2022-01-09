import { Actor } from "./Actor";
import { createGameManager, Manager } from "../state/GameManager";

export class Chrono extends Actor {
  update() {}
  heyboard_event_down() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const chrono = Manager.chrono.toFixed(1);
    ctx.font = "10px vedrana";
    ctx.fillStyle = "black";
    ctx.fillText(`CRONO:${chrono} segundos`, this.position.x, this.position.y);
  }
}
