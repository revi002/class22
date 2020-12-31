const Engine=Matter.Engine 
const Bodies=Matter.Bodies
const World=Matter.World  
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var options={
    restitution:0.8
  }
  ball=Bodies.circle(200,200,40,options)
  World.add(world,ball)
  var options1={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,options1)
  World.add(world,ground)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y, 40, 40);  
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20);  
  drawSprites();
}