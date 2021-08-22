const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ball;
let string;
let ball2;
let string2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();

  world = engine.world;

  var ballOptions={
    restitution:0.8
  };

  ball =Bodies.circle(200,200,10,ballOptions);
  World.add(world,ball);

  ball2=Bodies.circle(200,300,20,ballOptions);
  World.add(world,ball2);


  string=Matter.Constraint.create({
    pointA:{x:200,y:50},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.5
  });

  string2=Matter.Constraint.create({
    bodyA:ball,
    pointA:{x:0,y:0},
    bodyB:ball2,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.5
  });

World.add(world,string);
World.add(world,string2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,10);

  ellipse(ball2.position.x,ball2.position.y,20);

  stroke("green")
  line(string.pointA.x,string.pointA.y,ball.position.x,ball.position.y);

  stroke("green")
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);

}
function keyPressed(){
  if(keyCode==RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});
  }
}
