import Phaser from "phaser";

let bg;
let keyA;
let keyD;
let keySPACE;
let object1;
let player;
let playerJump;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/scene1.jpg');

        this.load.spritesheet('player', 'src/image/walk.png',
            { frameWidth: 1024, frameHeight: 1714 });
        this.load.spritesheet('playerJump', 'src/image/jumpnew.png',
            { frameWidth: 1024, frameHeight: 1049 });



        this.load.image('object1', 'src/image/object/1.png');
    }

    create() {

        //background
        bg = this.add.tileSprite(0, 0, 700, 950, 'bg').setOrigin(0, 0);

        //object
        object1 = this.physics.add.image(0, 932, 'object1')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(1500, 0)
            .setOffset(0, 14);


        //player
        this.player = this.physics.add.sprite(225, 700, 'player');
        this.player.setGravityY(650);
        this.player.setScale(0.07);
        this.player.setSize(1000, 990);
        this.player.setOffset(0, 400);



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

        this.anims.create({
            key: 'playerChargeJumpAni',
            frames: this.anims.generateFrameNumbers('playerJump', {
                start: 0,
                end: 0
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'playerJumpAni',
            frames: this.anims.generateFrameNumbers('playerJump', {
                start: 1,
                end: 2
            }),
            duration: 500,
            repeat: -1
        })



        this.player.setCollideWorldBounds(true)

        keySPACE = this.input.keyboard.on('keydown_SPACE',this.startJump, this);
        keySPACE = this.input.keyboard.on('keyup_SPACE',this.endJump, this);

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.physics.add.collider(object1, this.player);

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
        if (this.power <= 3.5) {
            this.power += .3;
            console.log(this.power);
        }
    }


    update(delta, time) {


        //playerwalk + velocity + anims
        if (keyA.isDown) {
            this.player.setVelocityX(-300);
            this.player.anims.play('playerWalkAni', true);
            this.player.flipX = true;

        } else if (keyD.isDown) {   
            this.player.setVelocityX(300);
            this.player.anims.play('playerWalkAni', true);
            this.player.flipX = false;
        } else if (keySPACE.isDown) {
            this.player.anims.play('playerChargeJumpAni', true);
            this.player.setVelocityX(0);
        } else if (Phaser.Input.Keyboard.JustUp(keySPACE)) {
            this.player.anims.play('playerJumpAni', true);
            
        } else{
            this.player.setVelocityX(0);
            this.player.anims.play('playerIdleAni', true);
        }

    }


}
export default GameScene;
