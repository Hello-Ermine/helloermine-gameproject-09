import Phaser from "phaser";

let background
     
class EndGame extends Phaser.Scene {
        constructor(test) {
            super({
                key: 'EndGame'
            });
        }
    
        preload() {
           this.load.image('endGame', 'src/image/endGame.jpg');

    
    }
        create() {
            background = this.add.image(349, 475, 'endGame')
            .setScale(1);
            
    
    }
        update(delta, time) {
            
    
    
    }
}
export default EndGame;