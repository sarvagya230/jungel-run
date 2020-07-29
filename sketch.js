var monkey,monkey_img,ground,screen,screen_img;
var ground,banana,rock;
var bananaG,banana_img;
var stone,stoneG,stone_img;//Global Variables
var score=0;
var g=0;



function preload(){
screen_img=loadImage("images/jungle.jpg");
monkey_img=loadAnimation("images/Monkey_01.png","images/Monkey_02.png","images/Monkey_03.png","images/Monkey_04.png","images/Monkey_05.png");
banana_img=loadImage("images/banana.png") ;
stone_img=loadImage("images/stone.png");   
  
}


function setup() {
  createCanvas(600,400);
  screen=createSprite(200,200,600,400);
  screen.addImage("screen",screen_img);
  monkey=createSprite(50,350,20,20);
  ground=createSprite(200,380,800,10);
  
  bananaG=new Group();
  stoneG=new Group();
  
}


function draw(){
  
if(g==0)
{
 background(0);
  
food();
stone();
screen.addImage("jungle",screen_img);
monkey.addAnimation("monkey",monkey_img);
monkey.scale=0.1;

ground.visible=false;
screen.velocityX=-3;
if(screen.x<100)
{
  screen.x=screen.width/2
}
if(keyDown("space")&&(monkey.y>=320))
{
   monkey.velocityY= -10;
}


monkey.velocityY=monkey.velocityY+0.5;
monkey.collide(ground)
switch(score)
{
    case 10:
    monkey.scale=0.12;
    break;
    case 20:
    monkey.scale=0.13;
    break;
    case 30:
    monkey.scale=0.14;
    break;
    case 40:
    monkey.scale=0.15;
    break;
    default:
    break;
  
    
}
if(monkey.collide(stoneG))
{
  g=1;
}  
}
if(g===1)
{
  background(0);
  screen.destroy();
  stoneG.destroyEach();
  monkey.destroy();
  textSize(42);
  stroke("red");
  fill("red");
  text("GAME OVER",100,200)
}  
drawSprites();
stroke("blue");
fill("blue");
text("score: "+score,300,50);
}
function food(){
  if(frameCount%60===0)
  {
  
  banana=createSprite(600,100,20,20);
  banana.velocityX=-3;
  banana.y=Math.round(random(200,340));
  banana.addImage("banana",banana_img);
  banana.scale=0.05;
  banana.lifetime=200;
  if(bananaG.collide(monkey))
  {
    score=score+1;
    bananaG.destroyEach();
  }  
  bananaG.add(banana);
  }

  
}
function stone()
{ if(frameCount%100===0)
{
    var stone = createSprite(600,370,10,10);
   stone.addImage("stone",stone_img);
   stone.velocityX=-3;
   stone.scale=0.1;
  stone.lifetime=200;
   stoneG.add (stone);
}
}  