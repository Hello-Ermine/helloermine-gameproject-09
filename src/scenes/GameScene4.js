import Phaser from "phaser";
let bg4;


class GameScene4 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene4'
        });
    }


    preload() {
        this.load.image('bg4','src/image/scene3.jpg')


    }

    create() {
        bg4 = this.add.tileSprite(0,0,1000,2100,'bg4')
        .setOrigin(0,0);

    }

    update(delta, time) {
    
    }

    
}
export default GameScene4;
