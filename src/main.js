import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import GameScene2 from './scenes/GameScene2';
import GameScene3 from './scenes/GameScene3';
import GameScene4 from './scenes/GameScene4';



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
            debug: true
        }
    },
    scene: [
        GameScene2,
        GameScene,
        
        
        
        
    ],
    
    
};

const game = new Phaser.Game(config);