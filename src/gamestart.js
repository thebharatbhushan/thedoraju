	
export default class Scene2 extends Phaser.Scene {
    constructor() {
      super('gamenew')
    }
  
    preload(){
    	this.load.image('skyBG', './src/assets/skybg.jpg');
    	this.load.image('player', './src/assets/doraemon.png');
    }
    create() {
    	this.add.image(960, 540, 'skyBG');
   	
    	this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.image(400, 300, 'player');

        this.player.setCollideWorldBounds(true);
	      
	    }
update(){
	this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(300);
        }
}	    
  }
