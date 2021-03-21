var canvas;
var music;
var red_surface;
var blue_surface;
var orange_surface;
var green_surface;
var box;
var object1,object2;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    red_surface=createSprite(85,580,140,20);
    red_surface.shapeColor="red";
    blue_surface=createSprite(240,580,140,20);
    blue_surface.shapeColor="blue";
    orange_surface=createSprite(390,580,140,20);
    orange_surface.shapeColor="orange";
    green_surface=createSprite(540,580,140,20);
    green_surface.shapeColor="green";

    //create box sprite and give velocity
   box=createSprite(300,80,25,25);
   box.shapeColor="white";
   box.velocityY=6;
   box.velocityX=5;

}

function draw() {
    
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    edges=createEdgeSprites();

    box.bounceOff(edges);

    if(box.x-red_surface.x <= box.width/2+red_surface.width/2 &&
        red_surface.x-box.x <= red_surface.width/2+box.width/2 &&
        box.y-red_surface.y <= box.height/2+red_surface.height/2 &&
        red_surface.y-box.y <=red_surface.height/2+box.height/2)
    {
        box.shapeColor="red";
        box.bounceOff(red_surface);
    }

    if(box.x-blue_surface.x <= box.width/2+blue_surface.width/2 &&
        blue_surface.x-box.x <= blue_surface.width/2+box.width/2 &&
        box.y-blue_surface.y <= box.height/2+blue_surface.height/2 &&
        blue_surface.y-box.y <=blue_surface.height/2+box.height/2)
    {
       box.shapeColor="blue";
       box.bounceOff(blue_surface);
    }

    if(box.x-orange_surface.x <= box.width/2+orange_surface.width/2 &&
       orange_surface.x-box.x <= orange_surface.width/2+box.width/2 &&
       box.y-orange_surface.y <= box.height/2+orange_surface.height/2 &&
       orange_surface.y-box.y <=orange_surface.height/2+box.height/2)
    {
        box.shapeColor="orange";
        box.velocityY=0;
        box.velocityX=0;
        music.stop();
    }

    if(box.x-green_surface.x <= box.width/2+green_surface.width/2 &&
       green_surface.x-box.x <= green_surface.width/2+box.width/2 &&
       box.y-green_surface.y <= box.height/2+green_surface.height/2 &&
       green_surface.y-box.y <= green_surface.height/2+box.height/2 )
    {
        box.shapeColor="green";
        box.bounceOff(green_surface);
        music.play();
    }
   
   
  drawSprites();

    //add condition to check if box touching surface and make it box
    
}

