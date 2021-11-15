import Phaser from "phaser";

let bg;
let keyA;
let keyD;
let object1;    
let player;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/scene1.jpg');
        this.load.spritesheet('player', 'src/image/walk.png',
                {frameWidth:1024, frameHeight:1714});

        this.load.image('object1', 'src/image/object/1.png');
    }

    create() {
        
        //background
        bg = this.add.tileSprite(0,0,700,950,'bg').setOrigin(0,0);
        
        //object
        object1 = this.physics.add.image(0,932, 'object1')
        .setOrigin(0,0)
        .setImmovable()
        .setSize(1500,0)
        .setOffset(0,14);
        this.physics.add.collider(object1, player);

        //player
        player = this.physics.add.sprite(225, 700, 'player');
        player.setGravityY(650);
        player.setScale(0.07);
        player.setSize(1000,990);
        player.setOffset(0,400);

        //animation player
        this.anims.create({
            key: 'playerWalkAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        this.anims.create({
            key: 'playerIdleAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 0
            }),
            duration: 500,    
            repeat: -1
        })




        player.setCollideWorldBounds(true)

        this.input.on('pointerdown',this.startJump, player);
        this.input.on('pointerup',this.endJump, player);

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);



        this.power = 0;
    }
    endJump() {
        this.timer.remove();
        player.setVelocityY(-this.power * 130);
        this.power = 0;
    }

    startJump() {
        this.timer = this.time.addEvent({ delay: 100, callback: this.charge, callbackScope: this, loop: true });

    }
    charge(){
        if(this.power <= 2.5){
            this.power += .3;
            console.log(this.power);
        }
    }


    update(delta, time) {

        //playerwalk + velocity + anims
       if(keyA.isDown){
           player.setVelocityX(-300);
           player.anims.play('playerWalkAni', true);
           player.flipX=true;
           
       }else if(keyD.isDown){
           player.setVelocityX(300);
           player.anims.play('playerWalkAni', true);
           player.flipX=false;
       }else{
           player.setVelocityX(0);
           player.anims.play('playerIdleAni', true);
       }
    }

       

}
export default GameScene;
