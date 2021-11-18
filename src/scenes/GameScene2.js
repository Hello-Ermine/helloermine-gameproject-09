import Phaser from "phaser";

let bg2;
let keyA;
let keyD;
let keySPACE;
    
let object1;
let object12;   
let object13;
let object13tri ;
let object14;
let object14tri;
let object15;
let object15tri;
let object16;
let object16tri;
let object17;
let object18;
let object19;
let object20;
let object21;
let object22;

let narm1;
let narm2;
let narm3;
let narm4;
let narm5;
let narm6;
let goNext;  
    
let playerJumpCharge;
let playerJump;
    
    
class GameScene2 extends Phaser.Scene {
        constructor(test) {
            super({
                key: 'GameScene2'
            });
        }
    
        preload() {
            //bg
            this.load.image('bg2', 'src/image/scene2.jpg');
            
            //spritesheet
            this.load.spritesheet('player', 'src/image/walk.png',
                { frameWidth: 1024, frameHeight: 1714 });
            this.load.spritesheet('playerJump', 'src/image/jumpnew.png',
                { frameWidth: 1024, frameHeight: 1049 });
            this.load.spritesheet('playerJumping', 'src/image/Jumping.png',
                { frameWidth: 1036, frameHeight: 1049 });
    
            //object
            this.load.image('object1', 'src/image/object/1.png');//เสร็จแล้ว
            this.load.image('object12', 'src/image/object/12.png');//เสร็จแล้ว
            this.load.image('object13', 'src/image/object/13.png');//เสร็จแล้ว
            this.load.image('object14', 'src/image/object/14.png');
            this.load.image('object15', 'src/image/object/15.png');
            this.load.image('object16', 'src/image/object/16.png');
            this.load.image('object17', 'src/image/object/17.png');
            this.load.image('object18', 'src/image/object/18.png');
            this.load.image('object19', 'src/image/object/19.png');
            this.load.image('object20', 'src/image/object/20.png');
            this.load.image('object21', 'src/image/object/21.png');
            this.load.image('goNext', 'src/image/Continue.png');
            this.load.image('narm1', 'src/image/narm.png');
            this.load.image('narmv22', 'src/image/narmv2.png');
            this.load.image('narmv23', 'src/image/narmv3.png');
        }
    
        create() {
    
            //background
            bg2 = this.add.tileSprite(0, 0, 700, 950, 'bg2').setOrigin(0, 0);
    
            //object
            object1 = this.physics.add.image(0, 932, 'object1')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(1500, 0)
            .setOffset(0, 14);
            object12 = this.physics.add.image(-80, 830, 'object12')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(68, 52)
            .setOffset(174, 36);
            object13 = this.physics.add.image(180, 710, 'object13')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(100, 50)
            .setOffset(97, 35);
            object13tri = this.physics.add.image(180, 710, 'object13')
            .setOrigin(0, 0)
            .setImmovable()
            .setVisible()
            .setSize(61, 50)
            .setOffset(197, 35);
            object14 = this.physics.add.image(400, 600, 'object14')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(1.5)
            .setSize(28, 50)
            .setOffset(185, 45);
            object14tri = this.physics.add.image(400, 600, 'object14')
            .setOrigin(0, 0)
            .setImmovable()
            .setVisible()
            .setSize(5, 22)
            .setOffset(267, 31);
            object15 = this.physics.add.image(200, 450, 'object15')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.5)
            .setSize(125, 120)
            .setOffset(235, 250);
            object15tri = this.physics.add.image(200, 450, 'object15')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.5)
            .setVisible()
            .setSize(28, 85)
            .setOffset(236, 165);
            object16 = this.physics.add.image(155, 290, 'object16')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(112, 5)
            .setOffset(136, 73);
            object16tri = this.physics.add.image(155, 290, 'object16')
            .setOrigin(0, 0)
            .setImmovable()
            .setVisible()
            .setSize(112, 30)
            .setOffset(136, 42);
            object17 = this.physics.add.image(30, 450, 'object17')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(112, 38)
            .setOffset(136, 42);
            object18 = this.physics.add.image(-50, 350, 'object18')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(68, 24)
            .setOffset(158, 48);
            object19 = this.physics.add.image(180, 180, 'object19')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(93, 32)
            .setOffset(145, 44);
            object20 = this.physics.add.image(350, 80, 'object20')
            .setOrigin(0, 0)
            .setImmovable()
            .setScale(0.5)
            .setSize(187, 48)
            .setOffset(208, 275);
            object21 = this.physics.add.image(480, 170, 'object21')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(96, 15)
            .setOffset(144, 54);
            object22 = this.physics.add.image(600, 70, 'object21')
            .setOrigin(0, 0)
            .setImmovable()
            .setSize(96, 15)
            .setOffset(144, 54);

            //อุปสรรคหนาม
            narm1 = this.add.image(236, 698, 'narmv22')
            .setScale(0.09);

            narm2 = this.add.image(554, 615, 'narmv22')
            .setScale(0.034);
            
            narm3 = this.add.image(254,478, 'narmv23')
            .setScale(0.06);

            narm4 = this.add.image(252, 455, 'narmv22')
            .setScale(0.013);

            narm5 = this.add.image(245, 355, 'narm1')
                .setScale(0.1);
           
            narm6 = this.add.image(430, 129, 'narmv22')
                .setScale(0.085);
    

            //goUp next Scene
            goNext = this.add.image(645,35,'goNext')
            .setOrigin(0,0)
            .setScale(0.03)
    
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
    
            //object collider with player
            this.physics.add.collider(object1, this.player);
            this.physics.add.collider(object12, this.player);
            this.physics.add.collider(object13, this.player,()=>{     
                this.scene.start('GameScene2')}
      );
            this.physics.add.collider(object13tri, this.player);
            this.physics.add.collider(object14, this.player,()=>{     
                this.scene.start('GameScene2')}
      );
            this.physics.add.collider(object14tri, this.player);
            this.physics.add.collider(object15, this.player);
            this.physics.add.collider(object15tri, this.player,()=>{     
                this.scene.start('GameScene2')}
      );
             this.physics.add.collider(object16, this.player,()=>{     
                this.scene.start('GameScene2')}
        );
            this.physics.add.collider(object16tri, this.player);
            this.physics.add.collider(object17, this.player);
            this.physics.add.collider(object18, this.player);
            this.physics.add.collider(object19, this.player);
            this.physics.add.collider(object20, this.player,()=>{     
                this.scene.start('GameScene2')}
        );
            this.physics.add.collider(object21, this.player);
            this.physics.add.collider(object22, this.player,()=>{     
                this.scene.start('GameScene3')}
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
            //สลับด้านภาพ object
            object12.flipX = true;
            object13.flipX = true;
            object15.flipX = true;

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
    
export default GameScene2;