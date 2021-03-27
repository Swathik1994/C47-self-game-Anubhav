const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var enemy1,enemy2;
var Player;
var trophy;
var b1,b2,b3,b4;
var shot =[] ;
var j = 0;

function preload(){
  PlayerImg = loadImage("sprites/sprite1.gif");
  bulletImg = loadImage("Sprites/bullet.png.png")
}

function setup() {
  //createCanvas(windowWidth-20,windowHeight-60);
  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;
  
  Player =  createSprite(50,50,20,40);
  Player.addImage(PlayerImg);
  Player.scale = 0.5;
  Player.velocityX = 0;
  Player.velocityY = 0;

  trophy = createSprite(1250,600,10,20);

  b1 = new Barrier(250,150,20,350);
  b2 = new Barrier(680,150,280,20); 
  b3 = new Barrier(870,150,20,350);
  b4 = new Barrier(450,350,200,20);
  b5 = new Barrier(780,550,200,20);
  //b6 = new Barrier();
}



function draw() {
  background(220,200,280);
  Engine.update(engine);

  edges=createEdgeSprites();
  Player.bounce(edges[0]);
  Player.bounce(edges[1]);
  Player.bounce(edges[2]);
  Player.bounce(edges[3]);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
 
  
 /*if(Player.isTouching(b1)){
    Player.bounce(b1)
  }

 
  if(Player.isTouching(b1)||Player.isTouching(b2)||Player.isTouching(b3)||Player.isTouching(b4)){
    Player.bounce(b1);
    Player.bounce(b2);
    Player.bounce(b3);
    Player.bounce(b4);
  }*/

  if(keyDown("right")){
   Player.x = Player.x+5;
 }  
 if(keyDown("left")){
  Player.x =Player.x -5;
}  
 if(keyDown("up")){
  Player.y = Player.y-5;
}  
 if(keyDown("down")){
  Player.y = Player.y+5;
}  

 if(Player.isTouching(trophy)){
  textSize(82);
  fill ("orange")
   text("Victory",500,600);
 }

 if(keyDown("SPACE")){
      //Shot
      
for (var i = 0; i < 9; i++) {
    shot[i] = createSprite(150, 390);
    shot[i].visible = false
    shot[i].x = Player.x;
    shot[i].y = Player.y;
    shot[i].addImage(bulletImg);
    shot[i].scale = 0.12;
              
     }
    shot[j].velocityX = 8;
    shot[j].visible = true
}

 
  drawSprites();
}
