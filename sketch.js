
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var g1;
var b1,b2,b3;
var ball;

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	g1 = new Ground(700,650,1400,20);
	b1 = new Bin(1050,530,25,150);
	b2 = new Bin(1200,620,300,25);
	b3 = new Bin(1350,530,25,150);
    ball = new Ball(200,500,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    
   g1.display();
   b1.display();  
   b2.display(); 
   b3.display(); 
   ball.display();

   keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-35})
	}
}



