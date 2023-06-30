var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var rand


function preload(){
bgImg = loadImage("assets/bg.png")
obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")
obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")


balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        

          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        spawnObstaclesTop();
        spawnObstaclesBottom()
}

function spawnObstaclesTop()  {
  if(World.frameCount % 60 == 0){
    obsTop = createSprite(400, 50, 40, 50);
    var obsTop
    obsTop.scale = 0.1;
    obsTop.velocityX = -3;
    obsTop.y = Math.round(random(0, 100))
    rand = Math.round(random(1, 2))
    switch(rand){
      case 1:
      obsTop.addImage(obsTop1)
      break
    
      case 2:
      obsTop.addImage(obsTop2)
      break

      default: 
      break
    }
    obsTop.lifetime = 140;
    balloon.depth = balloon.depth+1;
  }
}

function spawnObstaclesBottom()  {
  if(World.frameCount % 60 == 0){
    obsBottom = createSprite(400, 350, 40, 50);
    var obsBottom
    obsBottom.scale = 0.2;
    obsBottom.velocityX = -5;
    rand = Math.round(random(1, 3))
    switch(rand){
      case 1:
      obsBottom.addImage(obsBottom1)
      break
    
      case 2:
      obsBottom.addImage(obsBottom2)
      break

      case 3:
      obsBottom.addImage(obsBottom3)
      break

      default: 
      break
    }
    obsBottom.lifetime = 130;
    
  }
}
  
balloon.depth = balloon.depth+1;
