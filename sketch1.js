var car , wall;
var speed , weight;


function setup() {
  createCanvas(600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(500, 200, 60, height/2);
  speed = random(55,90);
  weight = random(400, 1500);
}

function draw() {
  background(255,255,255); 
  
  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);

  if (wall.x - car.x < wall.width + car.width) {

    car.velocityX = 0;
    var deformation = 0.5* speed* speed* weight/22500;

    if (deformation> 180) {
      car.shapeColor = color(255, 0, 0);
    }
    
    if (deformation<180 && deformation>100) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation< 100) {
      car.shapeColor = color(0, 255, 0);
    }


  }

  drawSprites();
}