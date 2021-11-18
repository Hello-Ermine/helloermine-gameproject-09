import Phaser from "phaser";

let trailer;

     
class TrailerScene extends Phaser.Scene {
        constructor(test) {
            super({
                key: 'TrailerScene'
            });
        }
    
        preload() {
            
           
           

    
    }
 
        create() {
           
 
    }

        loadvideo(){
            this.load.video('trailer', 'src/sound/Trailer.mp4', 'loadeddata', false, true);
        }
        addvideo(){
            trailer = this.add.video(349, 475, 'trailer');
            trailer.play(true);
        }
        update(delta, time) {
            
    
    
    }
}
export default TrailerScene;