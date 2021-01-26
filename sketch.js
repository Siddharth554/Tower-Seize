const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1200, 400)
  engine = Engine.create();
  world = engine.world;

  // Top level 
  block16 = new Box(790, 127, 50, 50)
  //second level
  block13 = new Box(740, 175, 50, 50)
  block14 = new Box(790, 175, 50, 50)
  block15 = new Box(840, 175, 50, 50)
  //    third level
  block8 = new Box(690, 225, 50, 50)
  block9 = new Box(740, 225, 50, 50)
  block10 = new Box(790, 225, 50, 50)
  block11 = new Box(840, 225, 50, 50)
  block12 = new Box(890, 225, 50, 50)
  //    Our Ground

  ground = new Ground(600, height, 1200, 20);

  //    Our player

  player = new Polygon(110, 195, 50, 50)
  slingshot = new SlingShot(player.body, { x: 200, y: 100 });


  //Ground for Pyramid
  newGround=new Ground(800,350,400,30)
}


function draw() {
  background("red");
  Engine.update(engine)
  // top display
  block16.display();
  ///second display
  block13.display();
  block14.display();
  block15.display();
  //third display
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  ground.display();
  player.display();
  slingshot.display();
  newGround.display();
}




function mouseDragged() {
  Matter.Body.setPosition(player.body, { x: mouseX, y: mouseY });
}





function mouseReleased() {
  slingshot.fly();
}
