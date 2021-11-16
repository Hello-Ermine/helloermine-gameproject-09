import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene2 from './scenes/Scene2';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 690,
    height: 950,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        GameScene,
        Scene2
        
        // Scene3,
        // Scene4
    ],
    
    
};

const game = new Phaser.Game(config);