import Phaser from 'phaser';
import loadingBG from './assets/TheBharatBG.jpg';
import loadingBar from './assets/loader.png';
class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('loadingBG', loadingBG);
        this.load.image('loadingBar', loadingBar);
    }
      
    create ()
    {
       this.add.image(960,540, "loadingBG");
       var loader = this.add.image(960,540, "loadingBar").setScale(0.5);
       this.tweens.add({
        targets: loader,
        angle: 360, 
        duration: 5000,
        // ease: 'Linear',
        repeat: -1 
      });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1920,
    height: 1080,
    scene: MyGame
};

const game = new Phaser.Game(config);
