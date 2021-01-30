var tower, towerImg;
var door, doorImg, doorsGroup;
var climber, climberImg, climbersGroup;
var ghost, ghostImg;

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png")
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
  
  doorsGroup= new Group();
  climbersGroup = new Group();
}

function spawnDoors(){
  if(World.frameCount%240===0){
    door=createSprite(200,-50);
    door.addImage(doorImg);
    
    climber=createSprite(200,10);
    climber.addImage(climberImg);
    
    door.x=Math.round(random(120,400));
    climber.x=door.x;
    door.velocityY=1;
    climber.velocityY=1;
    door.setLifeTime=800;
    climber.setLifeTime=800;
    doorsGroup.add(door);
    climbersGroup.add(climber);
    
    ghost.depth=door.depth;
    ghost.depth+=1;
    
  }
}

function draw(){
  if(tower.y>400){
    tower.y=tower.width/2;
  }
  
  if(keyDown("left_Arrow")) {
    ghost.x=ghost.x-3;
  }
  if(keyDown("right_Arrow")) {
    ghost.x=ghost.x+3;
  }
  if(keyDown("space")) {
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.5;
  
  spawnDoors();
  drawSprites();
}