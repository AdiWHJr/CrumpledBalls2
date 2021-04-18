
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1250,500);
	engine = Engine.create();
	world = engine.world;
  left = new Dustbin(955,350,20,220)
  right = new Dustbin(1235,350,20,220)
  bottom = new Dustbin(1095,470,200,20)
  ground = new Ground(width/2,470,width,20)
  paper = new Paper(100,450,70)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);
  bottom.imageDisplay()
  left.display()
  right.display()
  ground.display()
  paper.display()
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300})
  }

}