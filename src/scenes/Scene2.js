import Phaser from "phaser";
let bg;


class Scene2 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Scene2'
        });
    }


    preload() {
        this.load.image('bg','src/image/scene2.jpg')


    }

    create() {
        bg = this.add.tileSprite(0,-410,1000,2100,'bg')
        .setOrigin(0,0);

    }

    update(delta, time) {
    
    }

    
}
export default Scene2;