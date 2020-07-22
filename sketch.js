const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,160,70,70);
    box4 = new Box(920,160,70,70);
    box5 = new Box(810,80,70,70);
    ground = new Ground(600,height, 1200,20);
    pig_1 = new Pig(810, 350);
    pig_2 = new Pig(810, 170);
    bird = new Bird(100, 200);
    log_1 = new Log(810, 180, 300, PI/2);
    log_2 = new Log(810, 100, 300, PI/2);
    log_3 = new Log(760, 50, 150, PI/7);
    log_4 = new Log(870, 50, 150, - PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig_1.display();
    pig_2.display();
    bird.display();
    log_1.display();
    log_2.display();
    log_3.display();
    log_4.display();
}