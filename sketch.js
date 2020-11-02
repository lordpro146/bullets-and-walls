var wall,thickness
var bulet,weight, speed

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bulet=createSprite(50,200,50,50)
  wall=createSprie(1200,thickness,height/2)
  wall.shapecolor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  bulet.velocityX = speed;

  if (wall.x-bulet.x < (bulet.width+wall.width/2))
  {
    bulet.velocityX=0;
    var deformation=0.5 * width * speed * speed/2;
    if (deformation>180){
      bulet.shapecolor=color(255,0,0)
    }  
    if (deformation<180 && deformation>100){
      bulet.shapecolor=color(230,230,0)
    }
    if (deformation<100){
      bulet.shapecolor=color(0,255,0)
    }
  }
  hascollided();
  if (hascollided(bulet, wall))
  {
    bulet.velocityX=0;
    var damage=0.5 * weight * speed * speed * (thickness *thickness * thickness);

    if (damage>10)
    {
      wall.shapecolor=color(255,0,0);
    }
    if (damage <10){
      wall.shapecolor=color(0,255,0)
    }
  }
  drawSprites();
}

function hascollided (Lbulet,Lwall)
{
  buletRightEdge=lbulet.x =lbulet.width;
  wallLeftEdge=lwall.x;
  if (buletRightEdge>=allLeftEdge)
  {
    return true
  }
  return false
}