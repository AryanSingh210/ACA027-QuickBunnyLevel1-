var rabbit, carrot, obs1, obs2, obs3, obs4, edges;


function preload() {
  //load game assets
}




function setup() {
  createCanvas(600,600);
  
  edges = createEdgeSprites();
  rabbit = createSprite(50, 550, 40, 40);
  carrot = createSprite(550, 50, 20, 50);
  obs1 = createSprite(300, 200, 100, 20);
  obs2 = createSprite(300, 300, 100, 20);
  obs3 = createSprite(300, 400, 100, 20);
  obs4 = createSprite(400, 100, 100, 20);

  rabbit.shapeColor = 'white';
  carrot.shapeColor = 'pink';

  obs1.shapeColor = 'red';
  obs2.shapeColor = 'red';
  obs3.shapeColor = 'red';
  obs4.shapeColor = 'red';

  obs1.velocityX = -9;
  obs2.velocityX = -7;
  obs3.velocityX = 8;
  obs4.velocityX = 9
}




function draw() {
  background("black");  
  drawSprites();

  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);

  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);

  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);

  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);

  rabbit.bounceOff(edges[0]);
  rabbit.bounceOff(edges[1]);
  rabbit.bounceOff(edges[2]);
  rabbit.bounceOff(edges[3]);



  if(keyDown('up')){
    rabbit.y = rabbit.y -4;
  }
  if(keyDown('down')){
    rabbit.y = rabbit.y +4;
  }
  if(keyDown('left')){
    rabbit.x = rabbit.x -4;
  }
  if(keyDown('right')){
    rabbit.x = rabbit.x +4;
  }


  if(rabbit.isTouching(obs1)){
    rabbit.x = 50;
    rabbit.y = 550;
  }
  if(rabbit.isTouching(obs2)){
    rabbit.x = 50;
    rabbit.y = 550;
  }
  if(rabbit.isTouching(obs3)){
    rabbit.x = 50;
    rabbit.y = 550;
  }
  if(rabbit.isTouching(obs4)){
    rabbit.x = 50;
    rabbit.y = 550;
  }

  if(rabbit.isTouching(carrot)){
    rabbit.x = 50;
    rabbit.y = 550;
  }
}
