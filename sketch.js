var bg, eat, gym, bath, drink, move, sleep;
var astronaut, brush;

function preload(){
  bg = loadImage("images/iss.png");
  drink = loadAnimation("images/drink1.png", "images/drink1.png", "images/drink1.png", "images/drink2.png", "images/drink2.png", "images/drink2.png");
  eat = loadAnimation("images/eat1.png", "images/eat1.png", "images/eat1.png", "images/eat2.png", "images/eat2.png", "images/eat2.png");
  gym = loadAnimation("images/gym1.png", "images/gym1.png", "images/gym2.png", "images/gym2.png");
  bath = loadAnimation("images/bath1.png", "images/bath1.png", "images/bath1.png", "images/bath2.png", "images/bath2.png", "images/bath2.png",)
  sleep = loadAnimation("images/sleep.png");
  move = loadAnimation("images/move1.png", "images/move1.png", "images/move1.png", "images/move2.png", "images/move2.png", "images/move2.png",)
  brush = loadAnimation("images/brush.png")
}

function setup(){
  createCanvas(600, 500);
  
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("Sleeping", sleep);
  astronaut.scale = 0.1;

}

function draw(){
  background(bg);
  drawSprites();

  textSize(20);
  fill(255);
  text("Instructions", 20, 35);
  textSize(15);
  text("Up Arrow = Brushing", 20, 55);
  text("Down Arrow = Working Out", 20, 70);
  text("Left Arrow = Eating", 20, 85);
  text("Right Arrow = Bathing", 20, 100);
  text("M for Moving Around", 20, 115);

  edges= createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("up")){
    astronaut.addAnimation("Brushing", brush);
    astronaut.changeAnimation("Brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("down")){
    astronaut.addAnimation("Working Out", gym);
    astronaut.changeAnimation("Working Out");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("left")){
    astronaut.addAnimation("Eating", eat);
    astronaut.changeAnimation("Eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("right")){
    astronaut.addAnimation("Bathing", bath);
    astronaut.changeAnimation("Bathing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("Moving", move);
    astronaut.changeAnimation("Moving");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}