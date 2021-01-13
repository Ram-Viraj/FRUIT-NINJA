var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameover
var knifeImage
var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8
var microbes1
var GOsound
var G
function preload(){
 fruit1 = loadImage("fruit1.png")
 fruit2 = loadImage("fruit2.png")
 fruit3 = loadImage("fruit3.png")
 fruit4 = loadImage("fruit4.png")
 microbes1 = loadImage("alien1.png")
knifeImage= loadImage("sword.png")
gameover = loadImage("gameover.png")
GOsound=loadSound("gameover.mp3")
G=loadImage("gameover.png")
}

function setup() {
  createCanvas(600, 600)
   
  
 knife = createSprite(300,300,20,50);
 knife.addImage(knifeImage); 
 knife.scale =0.7;
  
   score = 0  
 fruitGroup=new Group();
 monster1 = new Group();
 
  GG = createSprite(300,300,20,20)
  GG.addImage(gameover)
}

function draw(){
background("green")
  knife.x = World.mouseX;
  knife.y = World.mouseY;
  knife.debug =true
  knife.setCollider("circle")
  
  fruits()
  Enemy()
  
  if(gameState===PLAY){
    text("Score:"+score,520,30)
    GG.visible = false
  if(fruitGroup.isTouching(knife)){
   fruitGroup.destroyEach();
   score = score + 10
if(monster.isTouching(knife))
  gameState=END
 
  }
  }
   else if(gameState===END){
     knife.addImage(gameover)
   knife.x = 300
     knife.y = 300
     
   }
  
  
  
  
  
  
  
  drawSprites()
}





function fruits(){
  if (World.frameCount%80===0){
    fruit = createSprite(400,200,20,20 )
    fruit.scale = 0.2
   r=Math.round(random(1,4)) 
  if(r==1){
    fruit.addImage(fruit1)
  } else if (r==2){
    fruit.addImage(fruit2)
  } else if (r==3){
    fruit.addImage(fruit3)
  }else if (r==4){
    fruit.addImage(fruit4)
  }
    fruit.y=Math.round(random(40,560));
    fruit.velocityX=-7;
    fruit.setLifetime = 100
    fruitGroup.add(fruit)
  }
}

function Enemy (){
  if (World.frameCount%200===0){
   monster = createSprite(400,200,20,20) 
   monster.addImage(microbes1)
   monster.y=Math.round(random(100,300))
   monster.velocityX = -8
   monster.setLifetime=50
  monster1.add(monster)
  }

}