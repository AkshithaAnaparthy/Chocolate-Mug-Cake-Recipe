
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper1 = new Paper(300,350,40,40);
     ground1 = new Ground(400,680,800,20);
     box1 = new Box(550,605,30,130);
     box2 = new Box(740,605,30,130);
     box3 = new Box(645,655,160,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}


function keyPressed(){
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-80})

                  }           
}
