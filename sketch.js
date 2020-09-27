var dog,happyDog,foodS,foodStock
var dogImg,dog1Img;
var database;
function preload()
{
  dogImg=loadImage("images/dog.png");
  dog1Img=loadImage("images/dog1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog= createSprite(200,250,30,30);
  dog.addImage("dog",dogImg);

  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog1Img);

}
drawSprites();

}

function readStock(data){
  foods=data.val();
}

function writeStock(x)
{
if(x<=0){
  x=0;
}
else{
  x=x-1;
}

  database.ref('/').update({
    food:x
  })
}





