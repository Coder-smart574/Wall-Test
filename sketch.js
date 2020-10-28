var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
speed=random(55,90);
weight=random(400,1500);
thickness=random(22,50);

bullet=createSprite(50,200,50,5)
bullet.shapeColor="yellow";
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,300);
wall.shapeColor="brown";

}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
  wall.shapeColor=color(0,255,0);
}

  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
