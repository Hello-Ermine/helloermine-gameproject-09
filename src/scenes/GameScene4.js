import Phaser from "phaser";
let bg4;
let keyA;
let keyD;
let keySPACE;


let object1;
let object41;
let object42;
let object43;
let object44;
let object45;
let object46;
let object47;
let object48;
let object49;
let object50;
let object51;
let narm41;

let star;
let starGroup;
let starEvent;

let playerJumpCharge;
let playerJump;



class GameScene4 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene4'
        });
    }


    preload() {
        //bg
        this.load.image('bg4', 'src/image/scene3.jpg')

        //spritesheet
        this.load.spritesheet('player', 'src/image/walk.png',
            { frameWidth: 1024, frameHeight: 1714 });
        this.load.spritesheet('playerJump', 'src/image/jumpnew.png',
            { frameWidth: 1024, frameHeight: 1049 });
        this.load.spritesheet('playerJumping', 'src/image/Jumping.png',
            { frameWidth: 1036, frameHeight: 1049 });

        //object

        this.load.image('object1', 'src/image/object/1.png');//เสร็จแล้ว
        this.load.image('object41', 'src/image/object/31.png')
        this.load.image('object42', 'src/image/object/31.png')
        this.load.image('object43', 'src/image/object/28.png')
        this.load.image('object44', 'src/image/object/37.png')
        this.load.image('object45', 'src/image/object/40.png')
        this.load.image('object46', 'src/image/object/27.png')
        this.load.image('object47', 'src/image/object/18.png')
        this.load.image('object48', 'src/image/object/33.png')
        this.load.image('object49', 'src/image/object/35.png')
        this.load.image('object50', 'src/image/object/29.png')

        this.load.image('narm41', 'src/image/narmv2.png');
        this.load.image('star', 'src/image/star.png');



    }

    create() {
        bg4 = this.add.tileSprite(0, 0, 1000, 2100, 'bg4')
            .setOrigin(0, 0)
            .setDepth(0.5);



        //player
        this.player = this.physics.add.sprite(255, 900, 'player'); // 255 900
        this.player.setGravityY(800);
        this.player.setScale(0.07);
        this.player.setSize(680, 985);
        this.player.setOffset(170, 400);
        this.player.setDepth(1);




        //object
        object1 = this.physics.add.image(0, 932, 'object1')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(1500, 0)
            .setOffset(0, 14)
            .setDepth(1);


        object41 = this.physics.add.image(370, 800, 'object41')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(22, 113)
            .setOffset(289.25, 244)
            .setDepth(0.9);

        object42 = this.physics.add.image(440, 595, 'object42')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(1.5)
            .setSize(22, 113)
            .setOffset(289.25, 244)
            .setDepth(0.9);

        object43 = this.physics.add.image(260, 650, 'object43')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.6)
            .setSize(70, 48)
            .setOffset(157, 37)
            .setDepth(0.9);

        object44 = this.physics.add.image(240, 530, 'object44')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.6)
            .setSize(69, 46)
            .setOffset(157, 38)
            .setDepth(0.9);

        object45 = this.physics.add.image(100, 630, 'object45')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale()
            .setSize(35, 21)
            .setOffset(175, 50)
            .setDepth(0.9);


        object46 = this.physics.add.image(-43, 500, 'object46')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.5)
            .setSize(123, 31)
            .setOffset(239, 239)
            .setDepth(0.9);

        object47 = this.physics.add.image(50, 400, 'object47')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale()
            .setSize(65, 20)
            .setOffset(160, 50)
            .setDepth(0.9);

        object48 = this.physics.add.image(590, 400, 'object48')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale()
            .setSize(71, 21)
            .setOffset(156, 50)
            .setDepth(0.9);

        object49 = this.physics.add.image(350, 255, 'object49')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.5)
            .setSize(30, 170)
            .setOffset(285, 210)
            .setDepth(0.9);
        object50 = this.physics.add.image(650, 255, 'object50')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.25)
            .setSize(148, 100)
            .setOffset(228, 250)
            .setDepth(0.9);

       


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

        this.anims.create({
            key: 'playerJumpingAni',
            frames: this.anims.generateFrameNumbers('playerJumping', {
                start: 0,
                end: 1
            }),
            duration: 500,
            repeat: -1
        })

        //star jiw jiw
        starGroup = this.physics.add.group()

        starEvent = this.time.addEvent({
                delay: 1750,
                callback: function(){

                star = this.physics.add.image(object49.x,object49.y+30,'star');
                star.setScale(0.3);
                star.setSize(130,125);
                star.setOffset(10,10);
                star.setDepth(0.9)
                
                

                starGroup.add(star);
                starGroup.setVelocityX(-100);
                
                

                },
                callbackScope: this,
                loop: true,

        });



        this.player.setCollideWorldBounds(true)

        keySPACE = this.input.keyboard.on('keydown_SPACE', this.startJump, this);
        keySPACE = this.input.keyboard.on('keyup_SPACE', this.endJump, this);

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


        //collider
        this.physics.add.collider(object1, this.player);
        this.physics.add.collider(object41, this.player);
        this.physics.add.collider(object42, this.player);
        this.physics.add.collider(object43, this.player);
        this.physics.add.collider(object44, this.player);
        this.physics.add.collider(object45, this.player);
        this.physics.add.collider(object46, this.player);
        this.physics.add.collider(object47, this.player);
        this.physics.add.collider(object48, this.player);
        this.physics.add.collider(object49, this.player);
        this.physics.add.collider(object50, this.player);

        this.physics.add.collider(this.player, starGroup, ()=>{     
            this.player.setX(0);
            this.player.setY(900);
    }
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

        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('playerIdleAni', true);
        }
        for (let i = 0; i < starGroup.getChildren().length; i++) {
            if (starGroup.getChildren()[i].x <= -20) {
                    starGroup.getChildren()[i].destroy();
        }
    }
}


}
export default GameScene4;
