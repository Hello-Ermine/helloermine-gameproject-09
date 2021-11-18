import Phaser from "phaser";
let bg3;
let keyA;
let keyD;
let keySPACE;

let object1;
let object31;
let object32;
let object33;
let object34;
let object35;
let object36;
let object37;
let object38;
let object39;
let object40;
let object69;
let object70;
let narm31;
let narm32;
let narm33;
let soundGame3;



let goUp;



let playerJumpCharge;
let playerJump;



class GameScene3 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene3'
        });
    }


    preload() {
        //bg
        this.load.image('bg3','src/image/scene3.jpg')

        //spritesheet
            this.load.spritesheet('player', 'src/image/walk.png',
                { frameWidth: 1024, frameHeight: 1714 });
            this.load.spritesheet('playerJump', 'src/image/jumpnew.png',
                { frameWidth: 1024, frameHeight: 1049 });
            

        //object

            this.load.image('object1', 'src/image/object/1.png');//เสร็จแล้ว
            this.load.image('object31', 'src/image/object/26.png')//เสร็จแล้ว
            this.load.image('object32', 'src/image/object/29.png');
            this.load.image('object33', 'src/image/object/30.png');
            this.load.image('object34', 'src/image/object/36.png');
            this.load.image('object35', 'src/image/object/40.png');
            this.load.image('object36', 'src/image/object/9.png');
            this.load.image('object37', 'src/image/object/40.png');
            this.load.image('object38', 'src/image/object/26.png');
            this.load.image('object39', 'src/image/object/5.png');
            this.load.image('object40', 'src/image/object/28.png');
            this.load.image('object69', 'src/image/object/40.png');
            this.load.image('object70', 'src/image/object/28.png');
            this.load.image('goUp', 'src/image/Continue.png');

            this.load.image('narm31', 'src/image/narm.png');
            this.load.image('narm32', 'src/image/narm.png');
            this.load.image('narm33', 'src/image/narmv2.png');
            
             //เพลง
             this.load.audio('soundGame3', 'src/sound/epic-travel-on-celtic-roads-version-60s-10819.mp3');


    }

    create() {
        bg3 = this.add.tileSprite(0,-1150,1000,2100,'bg3')
        .setOrigin(0,0);

        //เพลง
        soundGame3 = this.sound.add('soundGame3')
        .setVolume(0.5);
        soundGame3.play({loop:true});//ลูปเพลง

        //object
        object1 = this.physics.add.image(0, 932, 'object1')
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(1500, 0)
        .setOffset(0, 14);

        object31 = this.physics.add.image(350,670,'object31')
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(116, 23)
        .setOffset(240, 290);

        object32 = this.physics.add.image(600,604,'object32')
        .setScale(0.5)
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(149, 102)
        .setOffset(226, 248);

        object33 = this.physics.add.image(150,470,'object33')
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(27, 69)
        .setOffset(287, 265);

        object34 = this.physics.add.image(35,302,'object34')
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(199, 47)
        .setOffset(201, 276);

        object35 = this.physics.add.image(273,395,'object35')
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(35, 24)
        .setOffset(175, 49);

        object36 = this.physics.add.image(600,355,'object36')
        .setScale(0.75)
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(93, 58)
        .setOffset(145, 32);

        object37 = this.physics.add.image(622.5,255,'object37')
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(35, 70)
        .setOffset(170, 49);

        object38 = this.physics.add.image(-105,100,'object38')
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(113, 22)
        .setOffset(242, 290);

        object39 = this.physics.add.image(355,170,'object39')
        .setScale(0.5)
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(55, 38)
        .setOffset(165, 42);

        object40 = this.physics.add.image(75,25,'object40')
        .setScale(0.75)
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(72, 48)
        .setOffset(156, 36);

        object69 = this.physics.add.image(600,95,'object69')
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(35, 24)
        .setOffset(175, 49);

        object70 = this.physics.add.image(600,20,'object70')
        .setScale(0.5)
        .setOrigin(0, 0)
        .setImmovable()
        .setSize(72, 48)
        .setOffset(156, 36);


        goUp = this.add.image(670,65,'goUp')
        .setOrigin(0,0)
        .setScale(0.02);

        narm31 = this.add.image(645,60,'narm31')
        .setScale(0.035);

        narm32 = this.add.image(370,445,'narm32')
        .setScale(0.035);

        narm33 = this.add.image(370,405,'narm33')
        .setScale(0.035);



        




        //player
        this.player = this.physics.add.sprite(255, 900, 'player'); // 255 900
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

        //collider
        this.physics.add.collider(object1, this.player);
        this.physics.add.collider(object31, this.player);
        this.physics.add.collider(object32, this.player);
        this.physics.add.collider(object33, this.player);
        this.physics.add.collider(object34, this.player);
        this.physics.add.collider(object35, this.player, ()=>{     
            this.player.setX(0);
            this.player.setY(900);
    }
    );
        this.physics.add.collider(object36, this.player);
        this.physics.add.collider(object37, this.player, ()=>{     
          this.player.setX(0);
          this.player.setY(200);
    }
    );
        this.physics.add.collider(object38, this.player);
        this.physics.add.collider(object39, this.player);
        this.physics.add.collider(object40, this.player);  


        this.physics.add.collider(object69, this.player, ()=>{     
            soundGame3.stop();
            this.scene.start('GameScene4');
      }
      );

      this.physics.add.collider(object70, this.player, ()=>{     
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
            
        } else{
            this.player.setVelocityX(0);
            this.player.anims.play('playerIdleAni', true);
        }
    
    }

    
}
export default GameScene3;
