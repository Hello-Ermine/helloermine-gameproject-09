import Phaser from "phaser";

let background
     
class StartGame extends Phaser.Scene {
        constructor(test) {
            super({
                key: 'StartGame'
            });
        }
    
        preload() {
           this.load.image('endGame', 'src/image/endGame.jpg');

    
    }
        create() {
            background = this.add.image(-70, 30, 'endGame')
            .setScale(0.66)
            .setOrigin(0,0);
            
    
    }
        update(delta, time) {
            
    
    
    }
}
export default StartGame;