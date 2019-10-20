var assert = require('assert');
var { Color } = require('./color')
var { Sides, getSide } = require('./rubik');
var {Sides} = require('./side')
describe('Rubik', function () {
  describe('#getSide()', function () {
    [
      sample(Sides.UP, 1, 1),
      sample(Sides.DOWN, 1, -1),
      sample(Sides.LEFT, 0, 1),
      sample(Sides.RIGHT, 0, -1),
      sample(Sides.FRONT, 2, 1),
      sample(Sides.BACK, 2, -1),
    ].forEach((sample) => {
      it(`get side ${sample.side} should return 9 cubes with cube.${sample.axis}==${sample.value}`, function () {
        const side = getSide(sample.side)
        assert.equal(9, side.length)
        side.forEach(cube => {
          assert.equal(cube.coordinates[sample.axis], sample.value);
        });
      });
    });

    [
      sample(Sides.UP, Color.BLUE),
      sample(Sides.DOWN, Color.GREEN),
      sample(Sides.LEFT, Color.ORANGE),
      sample(Sides.RIGHT, Color.RED),
      sample(Sides.FRONT, Color.WHITE),
      sample(Sides.BACK, Color.YELLOW),
    ].forEach((sample) => {
      it(`side ${sample.side} should have the color ${sample.color}`, function () {
        const side = getSide(sample.side)
        side.forEach(cube => {
          assert.equal(cube.getFace(sample.side).color, sample.color);
        });
      });
    });
  });
});

function sample(side, color) {
  return {
    side: side,
    color: color
  }
}