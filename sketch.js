const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var rope1, rope2, rope3, rope4, rope5, ground;
var mConstraint;

function setup() {
  canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(340, 450, "white");
  pendulum2 = new Pendulum(400, 450, "white");
  pendulum3 = new Pendulum(460, 450, "white");
  pendulum4 = new Pendulum(520, 450, "white");
  pendulum5 = new Pendulum(580, 450, "white");

  rope1 = new Rope(pendulum1.body, { x: 340, y: 200 });
  rope2 = new Rope(pendulum2.body, { x: 400, y: 200 });
  rope3 = new Rope(pendulum3.body, { x: 460, y: 200 });
  rope4 = new Rope(pendulum4.body, { x: 520, y: 200 });
  rope5 = new Rope(pendulum5.body, { x: 580, y: 200 });

  ground =new Ground(460,200,280,20);
  rectMode(CENTER);
}

function draw() {
  background("lightPink");
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ground.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
