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
  constructor(actor: IActor) {
    this.numCrowns = 4;
    console.log("ready!");
  }
  addPoint() {}
  touchingCrown(idx: number) {}
}

export let Manager: GameManager;

export const createGameManager = (actor: IActor) => {
  Manager = new GameManager(actor);
};
