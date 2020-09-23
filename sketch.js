
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var stone;
var boy,boyImg;


function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(200,200,800,10);
	stone=new Stone(200,300,25);
	boy=createSprite(50,100,0,0);
	boy.scale = 0.1;
	



	Engine.run(engine);
  	drawSprites();
}


function draw() {
  background(0);
  ground.display();
  stone.display();
  boy.addImage(boyImg);
  drawSprites();
}



