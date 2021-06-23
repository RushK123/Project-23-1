const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, cb, pb, p, cp;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  cb = new ComputerBase(1400, random(450,height-300), 180,150);
  pb = new PlayerBase(300,random(450,height-300),180,150);
  p = new Player(300, pb.body.position.y-120, 50, 120);
  cp = new Player(1400, cb.body.position.y-120, 50,120);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   cb.display();
   pb.display();
   p.display();
   cp.display();
   //display Player and computerplayer


}
