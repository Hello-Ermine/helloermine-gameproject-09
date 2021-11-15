import Phaser from "phaser";

let bg;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/bgmain.png');
        this.load.spritesheet('player', 'src/image/walk.png',
                {frameWidth:1024, frameHeight:1714});

    }

    create() {
        
        //background
        bg = this.add.tileSprite(0,0,700,4900,'bg').setOrigin(0,0);

        this.player = this.physics.add.image(225, 700, 'player');
        this.player.setGravityY(400);
        this.player.setScale(0.175);


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




        this.player.setCollideWorldBounds(true)

        this.input.on('pointerdown', this.startJump, this);
        this.input.on('pointerup', this.endJump, this);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // this.input.keyboard.on('keyup_RIGHT', this.rightjump, this);





        this.power = 0;
    }
    endJump() {
        this.timer.remove();
        this.player.setVelocityY(-this.power * 130);
        this.power = 0;
    }

    startJump() {
        this.timer = this.time.addEvent({ delay: 100, callback: this.charge, callbackScope: this, loop: true });

    }
    charge() {
        if (this.power <= 3) {
            this.power += .3;
            console.log(this.power);
        }

    }

    update(delta, time) {
        if (keyA.isDown) {
            this.player.setVelocityX(-300);
            this.player.anims.play('playerWalkAni', true);
        } else if (keyD.isDown) {
            this.player.setVelocityX(300);
        } else {
            this.player.setVelocityX(0);
        }
    }
}
export default GameScene;
