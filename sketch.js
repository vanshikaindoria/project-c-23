const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
     box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
   // ball object
  ball=bodies.rectangle(200,100,40,40)
  world.add(world,ball);
  console.log(ground.position.x)
  console.log(ground.position.y)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(centre)
       // rect(ground.position.x,ground.position.y,400,40);
    
    rectMode(centre)
    // rect(ball.position.x,ball.position.y,400,40); 
}
