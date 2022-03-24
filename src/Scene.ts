import { Container } from "pixi.js";
import { DinoHat } from "./DinoHat";

export class Scene extends Container {

    constructor(){
        super();
        const dinoWithHat: DinoHat = new DinoHat();

        dinoWithHat.scale.set(0.5);
        dinoWithHat.x= 200;
        dinoWithHat.y= 300;
    
        this.addChild(dinoWithHat)
    }
}