
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground;
var stone,boy;
var mango1,mango2,mango3,mango4,mango5;
var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(600,615,50,400);
ground = new Ground(400,height,800,20);

stone = new Stone(230,600,20,20);
boy = new Boy(200,615,50,150);

mango1 = new Mango(575,475,50,50);
mango2 = new Mango(585,505,50,50);
mango3 = new Mango(555,495,50,50);
mango4 = new Mango(505,475,50,50);
mango5 = new Mango(500,515,50,50);

slingShot = new Slingshot(stone.body,{x:200,y:615});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  tree.display();
  ground.display();

  stone.display();
  boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}

