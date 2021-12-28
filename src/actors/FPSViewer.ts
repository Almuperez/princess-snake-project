import { Actor } from "./Actor";

export class FPSViewer extends Actor {
    update() {}
    keryboard_event (){}
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        const fps = (1 / delta).toFixed(2);
        ctx.font = "15px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
    }
}
