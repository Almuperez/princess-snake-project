import { IActor } from "../actors/Actor";
import { Crown } from "../actors/Crown";
import { angleToRad } from "../utils/angleToRad";

//singletone para isntancia runa clase. el resto de actores podran acceder a ello. 
//clase general donde hay información compartida
//cosas que pertenencen al ambito general del juego
class GameManager {
  //almacenar vidas que tienes, posciones...
  //¿¿¿Me tendría que traer la parte de lodash que hace que las coronas aparezcan aleatorias aqui?
  numCrowns: number;
  snake: IActor;
  crowns: Crown[] = [];
  points: number;
  constructor(actor: IActor) {
    this.points = 0;
    this.numCrowns = 4;
    this.snake = actor;
    for (let i = 0; i <= this.numCrowns; i++) {
      this.crowns.push(
        new Crown(actor)
      )
    }
    console.log("ready!");
  }
  addPoint() {
    console.log("addPoint")

    // this.currentLap++;
    // this.currentBarrier = 0;
    // this.barriers.forEach((b) => (b.touched = false));

    // if (this.currentLap > 1) {
    // 	alert("YOU WON");
  }
  touchingCrown(idx: number) {
    // if (this.currentBarrier == idx) {
    // 	this.currentBarrier++;
    // 	if (this.currentBarrier == this.barriers.length) {
    // 		this.addLap();
    // 	}
    // 	return true;
    // }
    // return false;
  }

}
//exportar manager y creatmanager en script
//cuando alguien invoque gamemanager voy a devolver un undefine
export let Manager: GameManager;

//si no quiero un undefine hay que llamar a creategamamnager
export const createGameManager = (actor: IActor) => {
  Manager = new GameManager(actor);
};
