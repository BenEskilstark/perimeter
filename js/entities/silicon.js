// @flow

const {
  getTileSprite,
} = require('../selectors/sprites');
const {makeEntity} = require('./makeEntity');

const config = {
  isTiled: true,
  isMeltable: true,
  isCollectable: true,
  pheromoneEmitter: true,
  pheromoneType: 'MOLTEN_SAND',
  hp: 10,
  meltTemp: 100, // temperature at which you melt
  heatQuantity: 120, // amount of glass produced when melted
};

const make = (
  game: Game,
  position: Vector,
	width: ?number,
	height: ?number,
  hp: ?number,
): Silicon => {
	return {
    ...makeEntity('SILICON', position, width || 1, height || 1),
    ...config,
    dictIndexStr: '',
    hp: hp || config.hp,
    playerID: 0, // gaia
    quantity: 0, // amount of pheromone emitted
  };
};

const render = (ctx, game, silicon): void => {
  // const obj = getTileSprite(game, silicon);
  // if (obj == null || obj.img == null) return;
  // ctx.drawImage(
  //   obj.img,
  //   obj.x, obj.y, obj.width, obj.height,
  //   silicon.position.x, silicon.position.y, silicon.width, silicon.height,
  // );

  ctx.fillStyle = "#006400";
  ctx.fillRect(silicon.position.x, silicon.position.y, silicon.width, silicon.height);
}

module.exports = {
  make, render, config,
};
