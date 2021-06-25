const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var particles = [];

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  if (frameCount %10 === 0) {
    particles.push(new Particle(random(10, width-10),20,20));
    particles.velocityY = 5
  }

  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

}
