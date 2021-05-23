const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;
var groundOptions;
var ball;
var ballOptions

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create()
  world = engine.world;

  groundOptions = {
    isStatic:true
  }  
  ground = Bodies.rectangle(200,390,400,20,groundOptions)
  World.add(world,ground)
  console.log(ground)

  ballOptions = {
    restitution:2
  }
  ball = Bodies.circle(200,100,50,ballOptions)
  World.add(world,ball)
}

function draw() {
  background('black');  
  Engine.update(engine)
  rectMode(CENTER)
  
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)
}