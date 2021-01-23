
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;


    

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    Ground = new ground(600,height,1200,20)

    box1 = new Box(700,720,70,100);
    box2 = new Box(920,720,70,100);
    pig1 = new Pig(810, 750);
    log1 = new Log(810,600,300, PI/2);

    box3 = new Box(700,440,70,100);
    box4 = new Box(920,440,70,100);
    pig2 = new Pig(810, 440);

    log3 =  new Log(810,350,300, PI/2);

    box5 = new Box(810,350,70,70);
    log4 = new Log(760,330,150, PI/7);
    log5 = new Log(870,330,150, -PI/7);

    bird = new Bird(100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);

    box1.display();
    box2.display();
    Ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}