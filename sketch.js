var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1000,400);
  speed = random(223,321);  
  weight = random(30,52);
  thickness =random(22,83);

  bullet= createSprite(50,random(90,250),50,25);
  wall= createSprite(1200,200,random(22,83),height/2);
  bullet.shapeColor=(80,80,80);
  bullet.velocityX=speed;
  wall.shapeColor=("white");
}

function draw() {
  background(0,0,0);  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX= 0; 

    var deformation = 0.5 *weight*speed*speed/22509;
   
    if (deformation>180) {
      bullet.shapeColor=color(255,0,0);
    }

     if (deformation<180 && deformation>100) {
     bullet.shapeColor=color(230,230,0);
    }

     if (deformation<100) {
     bullet.shapeColor=color(0,255,0);
    }
  }
 
  drawSprites();
}
function hasCollided(bullet,wall) {
  
}