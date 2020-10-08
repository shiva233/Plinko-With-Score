var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle
var plinkos = [];
var divisions = [];
var turn = 0;
var particles = [];

var divisionHeight=300;
var score =0;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

var count


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Grounds(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  
  text("Score : "+score,20,30);

  // division score text

  text("500",20,650);
  text("500",100,650);
  text("500",180,650);
  text("500",260,650);
  text("100",340,650);
  text("100",420,650);
  text("100",500,650);
  text("200",580,650);
  text("200",670,650);
  text("200",750,650);

if(gameState === "END"){

  textSize(100)
  text("GAME OVER",150,250);

}

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  if(particle != null){

    particle.display();

    if(particle.body.position.y > 760){

      if(particle.body.position.x <300){

          score=score + 500;
          particle=null;
          if(turn >= 5){

            gameState= "END"

          }

      }

     else if(particle.body.position.x <600 && particle.body.position > 301){

        score=score + 100;
        particle=null;
        if(turn >= 5){

          gameState= "END"

        }

    }

    else{

      score=score + 200;
      particle=null;
      if(turn >= 5){

        gameState= "END"

      }

  }

      

      


    }

  }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

  if(gameState !=="END")
  {

    turn++
    particle=new Particles(mouseX,10,10,10);
    

  }

}