
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
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
tree = new Tree(600,700,50,400);
ground = new Ground(400,height,800,20);

stone = new Stone(230,600,20,20);

mango1 = new Mango(575,305,30,30);
mango2 = new Mango(630,318,30,30);
mango3 = new Mango(520,320,30,30);
mango4 = new Mango(570,355,30,30);
mango5 = new Mango(650,295,30,30);

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
  Render.run(render);
}


function draw() {
  frameRate(2);
  Engine.update(engine);
  textSize(25);
  text("Press space to get a second Chance to Play!",50 ,50);
  image(boy,200,700,100,100);


 
  background("skyblue");
  Engine.update(engine);
  tree.display();
  ground.display();

  stone.display();
  

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  slingShot.display();

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
    distance=int(dist(stone.x,stone.y,mango1.x,mango1.y));
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
  

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }
  }
  
