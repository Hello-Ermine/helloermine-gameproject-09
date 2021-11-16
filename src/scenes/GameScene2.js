import Phaser from "phaser";

let bg2;
let keyA;
let keyD;
let keySPACE;
    
let object1;
let object12;   
let object13;
let object14;
let object15;
let object16;
let object17;
let object18;
let object19;
let object20;
let object21;
    
    
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
            this.load.image('object12', 'src/image/object/12.png');
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
           
           
    
            //player
            this.player = this.physics.add.sprite(225, 700, 'player');
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
    
            this.anims.create({
                key: 'playerJumpingAni',
                frames: this.anims.generateFrameNumbers('playerJumping', {
                    start: 0,
                    end: 1
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
            this.physics.add.collider(object12, this.player);
    
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
            
            object12.flipX = true;

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