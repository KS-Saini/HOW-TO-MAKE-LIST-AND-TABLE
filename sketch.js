// var canvas;
// var sprite, spritesGroup;
// var tower;
// var sk;
// var colorlist = ['aqua', 'red', 'blue', 'yellow', 'green', 'pink', 'skyblue', 'maroon', 'white'];

// function preload() {
//     tower_img = loadImage("assets/tower.png");
// }

// function setup() {
//     createCanvas(1500, 680);
//     // tower = createSprite(300,300);
//     // tower.addImage("tower",tower_img);
//     // tower.velocityX = 4;
//     sk = createSprite(width / 2 - 500, height / 2 + 169, 30, 30);
//     spritesGroup = new Group();
// }

// function draw() {
//     background("aqua");
//     // spritesGroup.collide(sk);
//     spawnGround();
//     drawSprites();
// }
// function spawnGround() {
//     if (frameCount % 117 === 0) {
//         sprite = createSprite(width / 2, height / 2 + 260, 300, 150);
//         sprite.x = Math.round(random(-10, 10))
//         sprite.shapeColor = random(colorlist);
//         sprite.velocityX = 5;
//         sprite.lifetime = 600;
//         spritesGroup.add(sprite)
//     }
// }
