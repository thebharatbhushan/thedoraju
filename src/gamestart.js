


export default class Scene2 extends Phaser.Scene {
    constructor() {
      super('gamenew')
    }
  
    create() {
      this.add.text(20, 20, 'Playing game!')
    }
  }