import Phaser from "phaser";

let playButton;
let background;
let ninja;
let jump3;
let snowBackground;
let soundStart;
     
class StartGame extends Phaser.Scene {
        constructor(test) {
            super({
                key: 'StartGame'
            });
        }
    
        preload() {
            this.load.image('background', 'src/image/backgroundStartSceneV2.png');
            this.load.image('startButton', 'src/image/startButton.png');
            this.load.image('ninja', 'src/image/backgroundNinja.png');
            this.load.image('jump3', 'src/image/jump3.png');
            this.load.image('snowBackground', 'src/image/snowBackground.jpg');
    }
        create() {
            
            ninja = this.add.image(110, 750, 'ninja')
            .setDepth(20)
            .setScale(0.2);
           

            background = this.add.image(350, 380, 'background')
            .setScale(0.3)
            .setDepth(3);
            
            snowBackground = this.add.image(349,475, 'snowBackground')
            .setScale(1)
            .setDepth(0);

            jump3 = this.add.image(200, 140, 'jump3')
            .setScale(0.05)
            .setDepth(9);

            playButton = this.add.image(440,720 , 'startButton')
            .setScale(0.8)
            .setDepth(10);

            playButton.setInteractive();
            playButton.on('pointerdown',()=>{
                this.scene.start('GameScene')
            })
    
    }
        update(delta, time) {
            
    
    
    }
}
export default StartGame;