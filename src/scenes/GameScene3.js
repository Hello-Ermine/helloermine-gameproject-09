import Phaser from "phaser";
let bg;


class GameScene3 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene3'
        });
    }


    preload() {
        this.load.image('bg','src/image/scene3.jpg')


    }

    create() {
        bg = this.add.tileSprite(0,-1150,1000,2100,'bg')
        .setOrigin(0,0);

    }

    update(delta, time) {
    
    }

    
}
export default GameScene3;
