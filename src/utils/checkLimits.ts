import { Point } from "../types/Point";

export const checkLimits = (position: Point) => {
    if (
        //en el eje de las x tienes que estar entre 1020 y 0; en el eje de las y entre 1024 y 0
        position.x < 500 &&
        position.x > 0 && 
        position.y < 500 &&
        position.y > 0
    ){
        return true;
    } 
    return false;
};

