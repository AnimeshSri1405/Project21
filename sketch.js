var wall,thickness,bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  background("grey")
  thickness=random(22,83)
  wall=createSprite(800, 200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(100,200,20,20)
bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
 if(hasCollided(bullet,wall)){
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage<10){
      wall.shapeColor=color(255,0,0);

    }
    if(damage>10){
      wall.shapeColor=color(0,255,0);

  } 

}
  drawSprites();
}
function hasCollided(bullet,wall){
  var bulletRightEdge=bullet.x+bullet.width;
  var wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}