class BulletController{
  constructor(position, direction, spriteName){
    this.sprite = Nakama.bulletGroup.create(position.x, position.y, 'assets', spriteName);

    this.sprite.angle = Math.atan2(direction.x, -direction.y) * (180/Math.PI);
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.sprite.body.checkWorldBounds = true;
    this.sprite.body.outOfBoundsKill = true;
    this.sprite.body.velocity = direction.setMagnitude(BulletController.BULLET_SPEED);
  }
}

BulletController.BULLET_SPEED = 15;
