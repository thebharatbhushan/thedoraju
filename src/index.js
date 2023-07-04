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
       this.add.image(960,540, "loadingBar").setScale(0.5);
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
