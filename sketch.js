var cat, cat1, cat2;
var mouse, mouse1, mouse2;
var garden, gardeni;
function preload() {
  cat2 = loadImage("cat2.png");
  cat1 = loadImage("cat1.png");
  mouse1 = loadImage("mouse1.png");
  mouse2 = loadImage("mouse2.png");
  garden = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(700,400);
    cat.addImage(cat1);

}

function draw() {

    background(255);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.addImage(cat1)
       mouse.addImage(mouse1);
    }

    drawSprites();
}


function keyPressed(){
   if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }
   
   if(keyCode === LEFT_ARROW){
     mouse.addAnimation("mouseTeasing", mouse2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
   }


}
