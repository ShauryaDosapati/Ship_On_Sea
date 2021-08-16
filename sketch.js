
function preload(){
  shipImage = loadAnimation("ship-2.png","ship-3.png",);
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  
  
  edges = createEdgeSprites();
  sea = createSprite(400,200,400,20)
  sea.addImage("sea.png",(seaImage))
    sea.scale = 0.5;
    sea.velocityX=-2
    ship = createSprite(300,300,20,50);
    ship.addAnimation("ship-3.png",(shipImage));
  ship.scale = 0.25;
  ship.x = 50
}


function draw(){
  
  background(seaImage);
  
  if(sea.x<0)
  {
    sea.x=sea.width/2
  }
  
  console.log(ship.y)
  
 drawSprites();
 
}
