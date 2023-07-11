export default class Scene2 extends Phaser.Scene {
  constructor() {
    super("gamenew");
  }

  preload() {
    this.load.image("skyBG", "./src/assets/skybg.jpg");
    this.load.image("player", "./src/assets/doraemon.png");
  }
  create() {
    this.cameras.main.setBounds(0, 0, 4740, 0);
    this.physics.world.setBounds(0, 0, 4740, 1000);

    this.add.image(960, 540, "skyBG");
    this.add.image(2850, 540, "skyBG");
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = this.physics.add.image(400, 300, "player");
    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
  }
  update() {
    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-500);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(500);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-500);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(500);
    }
  }
}
