
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinobj,paperobj,groundobj,world


function preload()
{
	
}

function setup() {

	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	dustbinobj=new dustbin(1200,650)
	paperobj=new paper(200,450,40)
	groundobj=new ground(width/2,670,width,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  dustbinobj.display()
  paperobj.display()
  groundobj.display()
 
  
  
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85})
	}
}



