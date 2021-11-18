import Phaser from "phaser";

let bg;
let keyA;
let keyD;
let keySPACE;

let object1;
let object2;
let object3;
let object4;
let object5;
let object6;
let object7;
let object8;
let object9;
let object10;
let object11;

let next;
let narm;
let narm2;
let narm3;
let narm4;


let playerJumpCharge;
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


        this.load.image('next', 'src/image/Continue.png');

        this.load.image('object1', 'src/image/object/1.png');//เสร็จแล้ว
        this.load.image('object2', 'src/image/object/2.png');//เสร็จแล้ว
        this.load.image('object3', 'src/image/object/3.png');//เสร็จแล้ว
        this.load.image('object4', 'src/image/object/4.png');//เสร็จแล้ว
        this.load.image('object5', 'src/image/object/5.png');//เสร็จแล้ว
        this.load.image('object6', 'src/image/object/6.png');//เสร็จแล้ว บล็อคตาย
        this.load.image('object7', 'src/image/object/7.png');//เสร็จแล้ว
        this.load.image('object8', 'src/image/object/8.png');//เสร็จแล้ว
        this.load.image('object9', 'src/image/object/9.png');//เสร็จแล้ว
        this.load.image('object10', 'src/image/object/10.png');// object วาปไป scene2
        this.load.image('object11', 'src/image/object/11.png');//เสร็จแล้ว บล็อคตาย
        this.load.image('narm', 'src/image/narm.png');
        this.load.image('narmv2', 'src/image/narmv2.png');
        this.load.image('narmv3', 'src/image/narmv3.png');

        
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
        object2 = this.physics.add.image(600, 700, 'object2')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(200, 80)
            .setOffset(200, 260);
        object3 = this.physics.add.image(270, 650, 'object3')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(100, 40)
            .setOffset(141, 40);
        object4 = this.physics.add.image(-50, 450, 'object4')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(137, 83)
            .setScale(0.7)
            .setOffset(226, 240);
        object5 = this.physics.add.image(170, 390, 'object5')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(55, 38)
            .setOffset(165, 42);
        object6 = this.physics.add.image(30, 200, 'object6')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.7)
            .setSize(345, 145)
            .setOffset(176, 75);
        object7 = this.physics.add.image(400, 270, 'object7')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.5)
            .setSize(108, 182)
            .setOffset(55, 92);
        object8 = this.physics.add.image(380, 160, 'object8')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.5)
            .setSize(185, 60)
            .setOffset(100, 32);
        object9 = this.physics.add.image(500, 300, 'object9')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(93, 60)
            .setOffset(146, 32);
        object10 = this.physics.add.image(54, 150, 'object10')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(63, 28)
            .setOffset(160, 32);
        object11 = this.physics.add.image(50, -50, 'object11')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(1.5)
            .setSize(189, 52)
            .setOffset(97, 30);

        //icon goUp
        next = this.add.image(120,80,'next')
            .setOrigin(0,0)
            .setScale(0.03);

        //อุปสรรค
        narm = this.add.image(140, 340, 'narm')
        .setScale(0.22)
        .setDepth(8);
        narm2 = this.add.image(162, 160, 'narmv2')
        .setScale(0.217)
        .setDepth(7);
        narm3 = this.add.image(268, 250, 'narmv3')
        .setScale(0.09);
        narm4 = this.add.image(173, 69, 'narm')
        .setScale(0.26);

        //player
        this.player = this.physics.add.sprite(225, 900, 'player');
        this.player.setGravityY(800);
        this.player.setScale(0.07);
        this.player.setSize(680, 990);
        this.player.setOffset(170, 400);


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
            duration: 3500,
            repeat: -1
        })

        this.player.setCollideWorldBounds(true)

        keySPACE = this.input.keyboard.on('keydown_SPACE',this.startJump, this);
        keySPACE = this.input.keyboard.on('keyup_SPACE',this.endJump, this);

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.physics.add.collider(object1, this.player);
        this.physics.add.collider(object2, this.player);
        this.physics.add.collider(object3, this.player);
        this.physics.add.collider(object4, this.player);
        this.physics.add.collider(object5, this.player);
        this.physics.add.collider(object6, this.player, ()=>{     
                this.scene.start('GameScene');
        }
        );
        this.physics.add.collider(object7, this.player);
        this.physics.add.collider(object8, this.player);
        this.physics.add.collider(object9, this.player);
        this.physics.add.collider(object9, this.player);
        
        this.physics.add.collider(object11, this.player,  ()=>{     
                  this.scene.start('GameScene');
        }
        );
        this.physics.add.collider(object10, this.player,()=>{     
            this.scene.start('GameScene2')}
  );


        this.power = 0;
    }
    endJump() {
        this.timer.remove();
        this.player.setVelocityY(-this.power * 140);
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
            this.player.anims.play('playerJumpingAni', true);
           
            
        } else{
            this.player.setVelocityX(0);
            this.player.anims.play('playerIdleAni', true);
        }

        

    }


}
export default GameScene;
