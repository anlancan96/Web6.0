class HomingBulletController{
  constructor(position,spriteName){
    this.sprite=Nakama.bulletGroup.create(position.x,position.y,'assets',spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.body.checkWorldBounds = true;
    this.sprite.body.outOfBoundsKill = true;
    this.enemy = Nakama.enemyGroup.getFirstAlive();

  }
  update(){
    if(this.enemy!==null){
      var direction = new Phaser.Point(this.enemy.x - this.sprite.position.x, this.enemy.y - this.sprite.position.y);
        this.sprite.body.velocity = direction.setMagnitude(HomingBulletController.BULLET_SPEED);
        this.sprite.angle = Math.atan(vector.x / -vector.y) * 180 / Math.PI;
    }
  }
}
HomingBulletController.BULLET_SPEED=300;
