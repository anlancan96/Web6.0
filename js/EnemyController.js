class EnemyController {
  constructor(x,y,spriteName){
    this.sprite=Nakama.game.add.sprite(x,y,'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    //this.sprite.body.collideWorldBounds=true;
  }

  update(){
    if(this.sprite.position.x<=EnemyController.MIN_WIDTH){
      this.sprite.body.velocity.x=EnemyController.ENEMY_SPEED;
    }
    else if(this.sprite.position.x>=EnemyController.MAX_WIDTH){
      this.sprite.body.velocity.x=-EnemyController.ENEMY_SPEED;
    }
  }
}
EnemyController.MIN_WIDTH=0;
EnemyController.MAX_WIDTH=600;
EnemyController.ENEMY_SPEED=200;
