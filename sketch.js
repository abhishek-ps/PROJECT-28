
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var stone;
var boy,boyImg;


function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);
	background(255);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(200,200,800,10);
	stone=new Stone(200,300);
	boy=createSprite(50,100,0,0);



	Engine.run(engine);
  	drawSprites();
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  boy.display();
}



