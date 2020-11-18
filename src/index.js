import { displayMap, findLocation } from './render.js';
import { map1, map1Tiles, map2, map2Tiles } from './maps.js';

export let playerLocation = 69;

let map = map1;
let tileMap = map1Tiles;

displayMap(map, tileMap);

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 87) {
    moveUp(map);
  } else if (event.keyCode == 65) {
    moveLeft(map);
  } else if (event.keyCode == 83) {
    moveDown(map);
  } else if (event.keyCode == 68) {
    moveRight(map);
  }
});

let moveUp = (map) => {
  let location = findLocation(map, playerLocation);
  if (map[location[0] - 1][location[1]] !== 'x') {
    clearPlayer(playerLocation);
    location[0] -= 1;
    playerLocation = map[location[0]][location[1]];
    console.log(playerLocation);
    let player = document.getElementById(playerLocation);
    player.innerHTML =
      '<img id="playerGIF" src="img/up.png" width="50%" height="50%" />';
    changeArea(map, location);
  }
};

let changeArea = (map, location) => {
  if (map[location[0]][location[1]][1] === 'a') {
    map = eval(map[location[0]][[location[1]]]);
    tileMap = eval(map[location[0]][[location[1]]] + 'Tiles');
    grid.innerHTML = '';
    displayMap(map, tileMap);
  }
};

let moveDown = (map) => {
  let location = findLocation(map, playerLocation);
  if (map[location[0] + 1][location[1]] !== 'x') {
    clearPlayer(playerLocation);
    location[0] += 1;
    playerLocation = map[location[0]][location[1]];
    let player = document.getElementById(playerLocation);
    player.innerHTML =
      '<img id="playerGIF" src="img/down.png" width="50%" height="50%" />';
  } else console.log("You can't move here");
};

let moveLeft = (map) => {
  let location = findLocation(map, playerLocation);
  if (map[location[0]][location[1] - 1] !== 'x') {
    clearPlayer(playerLocation);
    location[1] -= 1;
    playerLocation = map[location[0]][location[1]];
    let player = document.getElementById(playerLocation);
    player.innerHTML =
      '<img id="playerGIF" src="img/left.png" width="50%" height="50%" />';
  } else console.log("You can't move here");
};

let moveRight = (map) => {
  let location = findLocation(map, playerLocation);
  if (map[location[0]][location[1] + 1] !== 'x') {
    clearPlayer(playerLocation);
    location[1] += 1;
    playerLocation = map[location[0]][location[1]];
    let player = document.getElementById(playerLocation);
    player.innerHTML =
      '<img id="playerGIF" src="img/right.png" width="50%" height="50%" />';
  } else console.log("You can't move here");
};

let clearPlayer = (playerLocation) => {
  let player = document.getElementById(playerLocation);
  console.log(player);
  player.innerHTML = '';
};
