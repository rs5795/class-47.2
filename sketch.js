var bg, bgImg
var carmen,carmenImg
var ground
var obstacle, obstacleImg
var reward,rewardImg

function preload(){
  bgImg = loadAnimation("giphy.gif")
  carmenImg=loadAnimation("carmen.gif")
  obstacleImg=loadAnimation("fireball2.gif")
  rewardImg=loadAnimation("diamond.gif")

}
function setup(){
  createCanvas(900,400) 
  bg = createSprite(450,200,900,400)
  bg.addAnimation("moving",bgImg)
  bg.scale=1.9
  
  carmen=createSprite(90,220,20,20)
  carmen.addAnimation("running",carmenImg)
  carmen.scale=0.5

  ground=createSprite(450,380,900,10)
  ground.visible=false
}
function draw(){ 
 background("blue") 
 
 if(keyDown("up")){
   carmen.velocityY=-10
 }
 carmen.velocityY=carmen.velocityY+0.8
 carmen.collide(ground)

 spawnObstacles()
 spawnRewards()
 
 drawSprites()
 fill("black")
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
  }
 //4/2
  function spawnObstacles(){
    if(frameCount%270===0){
    obstacle=createSprite(870,300,20,20)
    obstacle.velocityX=-2
    obstacle.addAnimation("jumping",obstacleImg)
    obstacle.scale=0.5
    }
  }

  function spawnRewards(){
    if(frameCount%550===0){
    reward=createSprite(870,200,20,20)
    reward.y=Math.round(random(160,220))
    reward.velocityX=-2
    reward.addAnimation("rewarding",rewardImg)
    reward.scale=0.2
    }
  }
