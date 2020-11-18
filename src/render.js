import { playerLocation } from './index.js';

export const displayMap = (map, tileMap) => {
  let grid = document.getElementById('grid');
  grid.style.gridTemplateColumns = 'repeat(' + map[0].length + ', 1fr)';
  for (let i = 0; i < map.length; i++) {
    for (let y = 0; y < map[i].length; y++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add(tileMap[i][y], 'gridSquares');
      grid.appendChild(gridSquare).id = map[i][y];
    }
  }
  playerRender(playerLocation);
};

export const findLocation = (map, playerLocation) => {
  for (let i = 0; i < map.length; i++) {
    let index = map[i].indexOf(playerLocation);
    if (index > -1) {
      return [i, index];
    }
  }
};

export const playerRender = (playerLocation) => {
  let player = document.getElementById(playerLocation);
  player.innerHTML =
    '<img id="playerGIF" src="img/down.png" width="50%" height="50%" />';
};
