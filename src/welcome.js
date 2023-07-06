export default class Scene1 extends Phaser.Scene {
    constructor() {
      super('welcome')
    }
  
    create() {
      this.add.text(20, 20, 'Loading..')
  
      setTimeout(() => {
        this.scene.start('gamenew')
      }, 2000)
    }
  }