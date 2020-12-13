class Bagrons {
  constructor(){
    this.rand = Math.round(random(100,200));
    this.yPostion = this.rand;
  }  
  spawnBagrons(){
  if(frameCount%200=== 0){
 var bagron = createSprite(800,200,50,50);
   
   bagron.y=this.rand;
   bagron.velocityX = -3;
  }     
  }
  spawnrevolver(){
   if (frameCount%200=== 0) {
   var revolver = createSprite(800,200,60,10);
   revolver.y = this.yPostion;
   revolver.velocityX=-3;
   } 
  }
}