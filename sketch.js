const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
 var ground;
 var crane;
 var box1,box2,box3,box4;
 var wreckingball;
 var chain;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  crane = new Baseblock(50,100,150,50,true)
  
  ground = new Baseblock(400,550,width,100, true);
  box1 = new Baseblock(330,540,50,300, false);
  box2 = new Baseblock(400,500,50,180, false);
  box3 = new Baseblock(470,540,50,210, false);
  box4 = new Baseblock(550,500,50,180, false);
  wreckingball = new Ball(200,300,40);
  chain = new Rope(wreckingball.body,crane.body)

}


function draw() {
  background(235,245,255);  
 Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
ground.display();
crane.display();
wreckingball.display();
chain.display()
}



function mouseDragged() 
{
  Matter.Body.setPosition(wreckingball.body,{x:mouseX,y:mouseY})
}