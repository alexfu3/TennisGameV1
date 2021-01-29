var player1,player2;
var score,tennisball,bgImage;
var database;
var gameState = 0;
//var state;
var game,form,player;
var playerCount;
var allPlayers;
var tennisplayers;

function preload(){
  bgImage = loadImage("images/tennisfield.jpg")
  playerDown = loadAnimation("images/playerdown/playerdown_1.png","images/playerdown/playerdown_2.png",
  "images/playerdown/playerdown_3.png","images/playerdown/playerdown_4.png","images/playerdown/playerdown_5.png",
  "images/playerdown/playerdown_6.png","images/playerdown/playerdown_7.png","images/playerdown/playerdown_8.png"
  ,"images/playerdown/playerdown_9.png","images/playerdown/playerdown_10.png","images/playerdown/playerdown_11.png",
  "images/playerdown/playerdown_12.png","images/playerdown/playerdown_13.png","images/playerdown/playerdown_14.png",
  "images/playerdown/playerdown_15.png","images/playerdown/playerdown_16.png","images/playerdown/playerdown_17.png");
 
  playerUp = loadAnimation("images/playerup/playerup_1.png","images/playerup/playerup_2.png",
  "images/playerup/playerup_3.png","images/playerup/playerup_4.png","images/playerup/playerup_5.png",
  "images/playerup/playerup_6.png","images/playerup/playerup_7.png","images/playerup/playerup_8.png"
  ,"images/playerup/playerup_9.png","images/playerup/playerup_10.png","images/playerup/playerup_11.png",
  "images/playerup/playerup_12.png","images/playerup/playerup_13.png","images/playerup/playerup_14.png",
  "images/playerup/playerup_15.png","images/playerup/playerup_16.png","images/playerup/playerup_17.png");




}
function setup() {
  database = firebase.database();
  createCanvas(displayWidth,displayHeight-100);
  game = new Game();
   game.getState();
   game.start();
  }




function draw() {
  if(playerCount === 2){
    game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
//  drawSprites();  
}