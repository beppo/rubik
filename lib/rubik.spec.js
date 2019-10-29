var assert = require('assert');
var { Color } = require('./color')
var { Rubik } = require('./rubik');
var { Side } = require('./side')
describe('Rubik', function () {
  describe('#getSide()', function () {
    [
      sample(Side.UP, 1, 1),
      sample(Side.DOWN, 1, -1),
      sample(Side.LEFT, 0, 1),
      sample(Side.RIGHT, 0, -1),
      sample(Side.FRONT, 2, 1),
      sample(Side.BACK, 2, -1),
    ].forEach((sample) => {
      it(`get side ${sample.side} should return 9 cubes with cube.${sample.axis}==${sample.value}`, function () {
        const rubik = new Rubik()
        const side = rubik.getSide(sample.side)
        assert.equal(9, side.length)
        side.forEach(cube => {
          assert.equal(cube.coordinates[sample.axis], sample.value);
        });
      });
    });

    [
      sample(Side.UP, Color.BLUE),
      sample(Side.DOWN, Color.GREEN),
      sample(Side.LEFT, Color.ORANGE),
      sample(Side.RIGHT, Color.RED),
      sample(Side.FRONT, Color.WHITE),
      sample(Side.BACK, Color.YELLOW),
    ].forEach((sample) => {
      it(`side ${sample.side} should have the color ${sample.color}`, function () {
        const rubik = new Rubik()
        const side = rubik.getSide(sample.side)
        side.forEach(cube => {
          assert.equal(cube.getFace(sample.side).color, sample.color);
        });
      });
    });

  });
  describe('#rubik.rotateX()', function () {
    [
      { color: Color.WHITE, angle: Math.PI / 2 },
      { color: Color.YELLOW, angle: -Math.PI / 2 },
      { color: Color.BLUE, angle: 2 * Math.PI },
    ].forEach(item => {
      it(`should have color ${item.color} when rotated by ${item.angle}`, function () {
        const rubik = new Rubik()
        const cubes = rubik.rotateX(0, item.angle)
        assert.equal(cubes.length, 8)
        cubes.filter(cube => cube.coordinates[1] == 1).forEach(cube => {
          const face = cube.getFace(Side.UP);
          assert.equal(face.color, item.color);
        });
      });
    });
  });
  describe('#rubik.rotateY()', function () {
    [
      { color: Color.YELLOW, angle: Math.PI / 2 },
      { color: Color.WHITE, angle: -Math.PI / 2 },
      { color: Color.ORANGE, angle: 2 * Math.PI },
    ].forEach(item => {
      it(`should have color ${item.color} when rotated by ${item.angle}`, function () {
        const rubik = new Rubik()
        const cubes = rubik.rotateY(0, item.angle).filter(cube => cube.coordinates[0] == 1)
        assert.equal(cubes.length, 3)
        cubes.forEach(cube => {
          const face = cube.getFace(Side.LEFT);
          assert.equal(face.color, item.color);
        });
      });
    });
  });
  describe('#rubik.rotateZ()', function () {
    [
      { color: Color.RED, angle: Math.PI / 2 },
      { color: Color.ORANGE, angle: -Math.PI / 2 },
      { color: Color.BLUE, angle: 2 * Math.PI },
    ].forEach(item => {
      it(`should have color ${item.color} when rotated by ${item.angle}`, function () {
        const rubik = new Rubik()
        let cubes = rubik.rotateZ(0, item.angle)
        cubes = cubes.filter(cube => cube.coordinates[1] == 1)
        assert.equal(cubes.length, 3)
        cubes.forEach(cube => {
          const face = cube.getFace(Side.UP);
          assert.equal(face.color, item.color);
        });
        console.log(rubik.toString())
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