  var sun,sunImage;
  var planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8;
  var  planet1Image;

  var angle = 0;
var anglespeed = 0.1;
var sunRadius;
var text4;
 function preload(){
  sunImage = loadImage("images/sun.png"); 
  planet1Image  = loadImage("images/ep.png");
}

  function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight-20);
    
    sun=createSprite(0,0);
    sun.addImage(sunImage);
    sun.setCollider("circle", -30, -10, 5);
    sun.debug = true;

    planet1=createSprite(895, 450, 70, 70);
    planet1.shapeColor = "blue";

    planet2=createSprite(200, 100, 40, 40);
    planet2shapeColor = "orange";
    
    planet3=createSprite(300, 300, 70, 70);
    planet3.shapeColor = "51";

    planet4=createSprite(400, 50, 60, 60);
    planet4.shapeColor = "green";

    planet5=createSprite(600, 200, 60, 60);
    planet5.shapeColor = "purple";

    planet6=createSprite(500, 440, 56, 56);
    planet6.shapeColor = "red";

    planet7=createSprite(500, 40, 68, 68);
    planet7.shapeColor = "yellow";

    planet8=createSprite(780, 330, 50, 50);
    planet8.shapeColor = "brown";

    
  }

  function draw() {
    background(5);

    text("press enter to see the planet number",500,100);

    angleMode(DEGREES);
    translate(width / 8, height / 3);
    rotate(angle);

    angle = angle + anglespeed;

    if(keyDown("enter")){
     text("planet1 ",300,65);
     text("planet2 ",490,270);

    }
    
  if (World.frameCount % 50 === 0){
    sun.scale = sun.scale + 0.1;
 

  }
  if(sun.isTouching(planet1)){
   planet1.destroy();
    s}
  if(sun.isTouching(planet2)){
    planet2.destroy();
   }
   if(sun.isTouching(planet3)){
    planet3.destroy();
   }
   if(sun.isTouching(planet4)){
    planet4.destroy();
   }
   if(sun.isTouching(planet5)){
    planet5.destroy();
   }
   if(sun.isTouching(planet6)){
    planet6.destroy();
   }
   if(sun.isTouching(planet7)){
    planet7.destroy();
   }
   if(sun.isTouching(planet8)){
    planet8.destroy();
   }
   
drawSprites();  
  }
