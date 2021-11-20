import Phaser from "phaser";

let Tutorial;
let Back;
     
class TutorialScene extends Phaser.Scene {
        constructor(test) {
            super({
                key: 'TutorialScene'
            });
        }
    
        preload() {
           this.load.image('tutorial', 'src/image/Tutorial.png');
           this.load.image('back', 'src/image/Back.png')

    
    }
        create() {
            Tutorial = this.add.image(349, 475, 'tutorial')
            .setScale(1.1);

            Back = this.add.image(500,900,'back')
            .setScale(0.7);

            Back.setInteractive();
            Back.on('pointerdown',()=>{
                this.scene.start('StartGame')
            })

            
    
    }
        update(delta, time) {
            
    
    
    }
}
export default TutorialScene;