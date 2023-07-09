
export default class Scene1 extends Phaser.Scene {
    constructor() {
      super('welcome')
    }
    
    preload() {
      this.load.image("bg", './src/assets/TheBharatBG1.jpg');
      this.load.image("playnowbtn", './src/assets/playnowbtn.png');
      this.load.image("aboutbtn", './src/assets/aboutbtn.png');
      
    }

    create() {
    var bharat = this;
      this.add.image(960, 540, "bg");
      var playBtn = this.add.image(250, 1090, "playnowbtn").setScale(0.4).setInteractive({ useHandCursor: true });
      var aboutBtn = this.add.image(250, 1090, "aboutbtn").setScale(0.4).setInteractive({ useHandCursor: true });

      this.tweens.add({
        targets: playBtn,
        y: 790,
        duration: 500
      });
  
      this.tweens.add({
        targets: aboutBtn,
        y: 900,
        duration: 500
      });
      
      playBtn.on("pointerdown",
      function(){
	bharat.scene.start('gamenew')     
      });
      // setTimeout(() => {
      //   this.scene.start('gamenew')
      // }, 2000)
    } //End of create function..
  }
