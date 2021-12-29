import { IActor } from "../actors/Actor";
import { Crown } from "../actors/Crown";
import { angleToRad } from "../utils/angleToRad";

class GameManager {
    numCrowns: number
    constructor(actor: IActor) {
        this.numCrowns = 4;
        console.log("ready!")
    }
    addPoint() {

    }
    touchingCrown(idx: number) {

    }
}

export let Manager: GameManager;

export const createGameManager = (actor: IActor) => {
    Manager = new GameManager(actor);
};
