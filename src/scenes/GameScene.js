import Phaser from "phaser";
let bg;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','src/image/bgmain.png')
        
        
    }

    create() {
    bg = this.add.tileSprite(0,-4150,700,4900, 'bg').setOrigin(0,0);
    }

    update(delta, time) {
        
    }
}
export default GameScene;
