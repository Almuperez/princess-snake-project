import { IActor } from "../actors/Actor";
import { Crown } from "../actors/Crown";
import { angleToRad } from "../utils/angleToRad";

class GameManager {
  numCrowns: number;
  snake: IActor;
  crowns: Crown[] = [];
  points: number;
  addpoints: number;
  chrono: number;
  constructor(actor: IActor) {
    this.points = 0;
    this.numCrowns = 4;
    this.snake = actor;
    this.chrono = 0;
    this.addpoints = 0;
    for (let i = 0; i <= this.numCrowns; i++) {
      this.crowns.push(new Crown(actor));
    }
    //console.log("ready!");
  }

  update(delta: number) {
    this.chrono += delta;
  }

  //puntos para ganar el juego + alert
  
  addPoint() {
    //console.log("addPoint");
    this.points++;
    //console.log("adpoint", this.points)
    if (this.points > 10) {
      this.crowns.forEach((b) => (b.status = false));
      alert(
        `YOU WON! Your score ${this.getChrono()}, pulsa Aceptar para volver a empezar`
      );
      location.reload();
    }
  }
  getChrono() {
    return `${this.chrono.toFixed(1)} segundos`;
  }
  draw() {}
}

export let Manager: GameManager;

export const createGameManager = (actor: IActor) => {
  Manager = new GameManager(actor);
};
