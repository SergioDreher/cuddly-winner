import { Container, Sprite } from "pixi.js"

export class DinoHat extends Container {

    constructor(){
        super();

        const dino: Sprite = Sprite.from("Dino");

        const hat: Sprite = Sprite.from("Hat");

        hat.position.set(20,-270);
        hat.scale.set(0.8);
        
        this.addChild(dino);
        this.addChild(hat);
    }

}