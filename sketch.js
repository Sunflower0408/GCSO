var car,bullet,speed,weight;
  

function setup() {
  createCanvas(800,400);
 

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(100,200,20,50);
  car.velocityX=speed

  wall=createSprite(500,200,50,400);
  
}

function draw() {
  background(255,255,255);  

  if(car.isTouching(wall)) {
   car.velocityX=0;
   deformation=(0.5*weight*speed*speed)/22500
   if(deformation<100) {
     car.shapeColor="GREEN"
 }

 else if(deformation>100 && deformation<180) {
   car.shapeColor="YELLOW"
 }

 else{
   car.shapeColor="RED"
 }

  }

  drawSprites();
}