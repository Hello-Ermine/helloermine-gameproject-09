import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import GameScene2 from './scenes/GameScene2';
import GameScene3 from './scenes/GameScene3';
import GameScene4 from './scenes/GameScene4';
import StartGame from './scenes/StartGame';



const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 698,
    height: 950,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
       }
    },
    scene: [
        StartGame,
        GameScene,
        GameScene2,
        GameScene3,
        GameScene4
        
       

        
        
        
        
    ],
    
    
};

const game = new Phaser.Game(config);