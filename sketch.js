
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var launchingForce=100;

var tree,ground;
var stone,boy;
var mango1,mango2,mango3,mango4,mango5;
var slingshot;

function preload()
{
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(600,615,50,400);
ground = new Ground(400,height,800,20);

stone = new Stone(230,600,20,20);

mango1 = new Mango(575,475,50,50);
mango2 = new Mango(585,505,50,50);
mango3 = new Mango(555,495,50,50);
mango4 = new Mango(505,475,50,50);
mango5 = new Mango(500,515,50,50);

slingShot = new Slingshot(stone.body,{x:200,y:615});
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1300,
    height: 600,
    wireframes: false
  }
});

	Engine.run(engine);
  
}


function draw() {
  textSize(25);
  text("Press space to get a second Chance to Play!",50 ,50);
  image(boy ,200,340,200,300);


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

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);



  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420});
	  slingShot.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;
  }

