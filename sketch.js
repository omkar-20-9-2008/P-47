var robot;
var gamestate = 1;
var PAUSE = 3;
var enemies, enemimg, graniteimg,bomb,bombimg;
var laser,laserimg;
var coinimg,coin;
var jumps = 0;
var coins = 0;
var anime;
var ground,invisibleground;
var bombex;
var line1, line2, line3, line4, line5, line6, line7, line8;
var rect1, rect2, rect3, rect4, rect5,rect6;
var recharge,Recharge;
var pay,Pay;
var back,Back;
var go,gy,gn,Go,Gy,Gn;
var tyfp,Tyfp;
var s1;
var coinG,laserG,bombG,graniteG,enemyG;

function preload(){

  anime = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
  laserimg = loadImage("laser.png");
  coinimg = loadImage("coin.png");
  bombimg = loadImage("bomb.png");
  Recharge = loadImage("recharge.png");
  graniteimg = loadImage("granite.png");
  Pay = loadImage("pay.png");
  Back = loadImage("back.png");
  Go = loadImage("Go.jpeg");
  Gy = loadImage("Yes.jpeg");
  Gn = loadImage("No.jpeg");
  enemimg = loadAnimation("11.png","22.png","33.png","44.png","55.png","66.png","77.png","88.png","99.png","100.png");
  Tyfp = loadImage("tyfp.png");

}
function setup() {
  createCanvas(800,600);

  rect1 = createSprite(363,60,22,50);
  rect1.shapeColor = rgb(255,0,0);

  rect2 = createSprite(387,60,22,50);
  rect2.shapeColor = rgb(255,128,0)

  rect3 = createSprite(411,60,22,50);
  rect3.shapeColor = rgb(255,255,0)

  rect4 = createSprite(436,60,22,50);
  rect4.shapeColor = rgb(128,255,0)

  rect5 = createSprite(460,60,22,50);
  rect5.shapeColor = rgb(0,255,0);

  rect6 = createSprite(475,60,15,20)
  rect6.shapeColor="black";

  line1 = createSprite(350,60,5,50);
  line1.shapeColor = "black";
  
  line2 = createSprite(410,37.5,120,5);
  line2.shapeColor = "black";

  line3 = createSprite(470,60,5,50);
  line3.shapeColor = "black";

  line4 = createSprite(410,82.5,120,5);
  line4.shapeColor = "black";

  line5 = createSprite(374,60,5,50);
  line5.shapeColor = "black";

  line6 = createSprite(398,60,5,50);
  line6.shapeColor = "black";

  line7 = createSprite(422,60,5,50);
  line7.shapeColor = "black";
  
  line8 = createSprite(446,60,5,50);
  line8.shapeColor = "black";

  robot = createSprite(100,480,50,50);
  robot.addAnimation("robot",anime);
  robot.scale = 0.20;

  ground = createSprite(400,580,800,10);
  ground.shapeColor = "brown";

  recharge = createSprite(575,60,100,100);
  recharge.addImage("recharge",Recharge);
  recharge.scale = 0.06;

  back = createSprite(725,60,100,100);
  back.addImage("back",Back);
  back.scale = 0.06;
  back.visible = false;

  pay = createSprite(450,500,100,100);
  pay.addImage("pay",Pay);
  pay.scale = 0.06
  pay.visible = false;
  
  invisibleground = createSprite(400,595,800,10);
  invisibleground.visible = false;

  go = createSprite(400,200,800,400);
  go.addImage("go",Go);
  go.visible=false;
  go.scale=0.9

  gy = createSprite(200,495,400,200);
  gy.addImage("gy",Gy);
  gy.visible=false;
  gy.scale=0.7;

  gn = createSprite(600,490,400,200);
  gn.addImage("gn",Gn);
  gn.visible=false;
  gn.scale=0.7;

  tyfp = createSprite(400,300,800,600);
  tyfp.addImage("tyfp",Tyfp);
  tyfp.scale=3;
  tyfp.visible=false;
    
  coinG = new Group();
  laserG = new Group();
  bombG = new Group();
  enemyG = new Group();

}
function draw() {

  console.log(frameCount);

  if(gamestate===1){
    background(255,255,255);  


  robot.collide(invisibleground);

  recharge.visible = true;
  rect6.visible=true;
  rect5.visible=true;
  rect4.visible=true;
  rect3.visible=true;
  rect2.visible=true;
  rect1.visible=true;
  robot.visible=true;
  ground.visible=true;

  line1.visible=true;
  line2.visible=true;
  line3.visible=true;
  line4.visible=true;
  line5.visible=true;
  line6.visible=true;
  line7.visible=true;
  line8.visible=true;
  pay.visible=false;
  back.visible = false;


  if(keyWentDown("space")&&robot.y>=470){
    robot.velocityY=-15.5;
    jumps++
  }
  console.log(frameCount);

  robot.velocityY = robot.velocityY +0.4;

  if(frameCount%150===0){

    coin = createSprite(850,random(500,200),50,50);
    coin.addImage("coin",coinimg);
    coin.scale = 0.3;
    coin.velocityX = -5;  
    
    coinG.add(coin)
  }
  coinG.setVelocityXEach(-5);
  coinG.setVisibleEach(true);

  if(frameCount%450===0){
    bomb = createSprite(900,random(400,550));

    ran = Math.round(random(1,2))
    switch(ran){
      case 1 : bomb.addImage("bomb",graniteimg);
      bomb.scale = 0.15;
      break;
      
      case 2 : bomb.addImage("bomb",bombimg);
      bomb.scale = 0.15;
      break;
    }
    bomb.velocityX = -7;

    bombG.add(bomb);
  }
  if(mousePressedOver(recharge)){
    gamestate = PAUSE;
  }

  bombG.setVelocityXEach(-7);
  bombG.setVisibleEach(true);

  if(frameCount%350===0){

    enemies = createSprite(850,480,50,50);
    enemies.addAnimation("enemies",enemimg);
    enemies.scale=1.4;
    enemies.velocityX=-6;

    enemyG.add(enemies);
  }

  enemyG.setVelocityXEach(-6);
  enemyG.setVisibleEach(true);

  if(keyWentDown(RIGHT_ARROW)){
    laser = createSprite(210,210,10,10);
    laser.addImage("laser",laserimg);
    laser.scale=0.1;
    laser.y = robot.y-60;
    laser.velocityX=15;
    laserG.add(laser);
    playSound("sf_laser_15.mp3");

  }

  laserG.setVelocityXEach(15);
  laserG.setVisibleEach(true);

  if(laserG.isTouching(enemyG)){
    enemyG.destroyEach();
    laserG.destroyEach();
    playSound(s1,false);
  }

  if(laserG.isTouching(bombG)){
    bombG.destroyEach();
    laserG.destroyEach();

  }

  if(frameCount>=700 || jumps===10 && rect5.visible===true){
    rect5.visible = false;
  }

  if(frameCount>=1400 || jumps===20 && rect4.visible===true && rect5.visible===false){
    rect4.visible = false;

  }
  if(frameCount>=2100 || jumps===30 && rect5.visible===false && rect4.visible===false && rect3.visible===true){
    rect3.visible = false;
 
  }

  if(frameCount>=2800 || jumps===30 && rect5.visible===false && rect4.visible===false && rect3.visible===false && rect2.visible === true){ 
    rect2.visible = false;

  }
  if(frameCount>=3500 || jumps===40 && rect5.visible===false && rect4.visible===false && rect3.visible===false && rect2.visible === false && rect1.visible===true){ 
    rect1.visible = false;
    gamestate=2

  }

  if(coinG.isTouching(robot)){
    coinG.destroyEach();
    coins++;
  }

  if(robot.isTouching(bombG) || robot.isTouching(enemyG)){
    gamestate = 2;
  }

  textSize(40);
  fill(0);
  text("Coins:" + coins,50,75);
  }

  if(gamestate === PAUSE){
    recharge.visible = false;
    rect6.visible=false;
    rect5.visible=false;
    rect4.visible=false;
    rect3.visible=false;
    rect2.visible=false;
    rect1.visible=false;
    robot.visible=false;
    ground.visible=false;

    line1.visible=false;
    line2.visible=false;
    line3.visible=false;
    line4.visible=false;
    line5.visible=false;
    line6.visible=false;
    line7.visible=false;
    line8.visible=false;
    pay.visible=true;
    back.visible=true;

    coinG.setVelocityXEach(0);
    bombG.setVelocityXEach(0);
    enemyG.setVelocityXEach(0);
    laserG.setVelocityXEach(0);

    coinG.setVisibleEach(false);
    bombG.setVisibleEach(false);
    enemyG.setVisibleEach(false);
    laserG.setVisibleEach(false);

    textSize(30);
    fill(0);
    text("To charge battery",300,150);
    textStyle(BOLD);
    text("10 Coins = 100 battery",290,300);
    textStyle(NORMAL);
    text("Click on the button to charge battery",250,400);

    if(mousePressedOver(pay) && coins >= 10){
      coins = coins-10;
      rect5.visible=true;
      rect4.visible=true;
      rect3.visible=true;
      rect2.visible=true;
      gamestate = 1;
      frameCount = 0;

    }



    if(mousePressedOver(back)){
      gamestate=1;
      bombG.setVelocityXEach(-7);
      laserG.setVelocityXEach(15);
      coinG.setVelocityXEach(-5);
      enemyG.setVelocityXEach(-6);


    }
    
  }

  if(gamestate===2){
    background(0,108,180);

    coinG.destroyEach();
    rect6.visible=false;
    rect5.visible=false;
    rect4.visible=false;
    rect3.visible=false;
    rect2.visible=false;
    rect1.visible=false;
    robot.visible=false;
    recharge.visible=false;
    ground.visible=false;
    bombG.destroyEach();
    laserG.destroyEach();
    enemyG.destroyEach();
    line1.visible=false;
    line2.visible=false;
    line3.visible=false;
    line4.visible=false;
    line5.visible=false;
    line6.visible=false;
    line7.visible=false;
    line8.visible=false;
    go.visible=true;
    gy.visible=true;
    gn.visible=true;
    if(mousePressedOver(gy)){
      reset();
      gamestate = 1;
      frameCount = 0;
    }
    if(mousePressedOver(gn)){
      gamestate=0;
    }

  }

  if(gamestate === 0){

    background(0);
    tyfp.visible=true;
    go.visible=false;
    gy.visible=false;
    gn.visible=false;
  }




  drawSprites();
}

function reset(){
  recharge.visible= true;
  rect6.visible=true;
  rect5.visible=true;
  rect4.visible=true;
  rect3.visible=true;
  rect2.visible=true;
  rect1.visible=true;
  robot.visible=true;
  ground.visible=true;

  line1.visible=true;
  line2.visible=true;
  line3.visible=true;
  line4.visible=true;
  line5.visible=true;
  line6.visible=true;
  line7.visible=true;
  line8.visible=true;
  pay.visible=false;
  back.visible=false;
  go.visible=false;
  gy.visible=false;
  gn.visible=false;
  coins = 0;
  jumps = 0;

}