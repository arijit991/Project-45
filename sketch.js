// var canvas;
 var backgroundImage;
// var fuelImage, powerCoinImage, lifeImage;
// var obstacle1Image, obstacle2Image;
 var database, gameState;
 var form, player, playerCount;
 var allPlayers, obstacles;
 var cars = [];

function preload() {
   backgroundImage = loadImage("./assets/background.jpg");
   car1_img = loadImage("./assets/car.png");
   track = loadImage("./assets/background1.jpg");
//   car2_img = loadImage("../assets/car2.png");
//   track = loadImage("../assets/track.jpg");
//   fuelImage = loadImage("./assets/fuel.png");
//   powerCoinImage = loadImage("./assets/goldCoin.png");
//   obstacle1Image = loadImage("./assets/obstacle1.png");
//   obstacle2Image = loadImage("./assets/obstacle2.png");
     animalImage = loadImage("./assets/animal.png");
//   boomImg =  loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
   background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  // if (gameState === 2) {
  //   game.showLeaderboard();
  //   game.end();
  // }
 }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
