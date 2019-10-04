var assert = require('assert');
var { Sides, getSide } = require('./rubik');
describe('Rubik', function () {
  describe('#getSide()', function () {
    [
      sample(Sides.UP,'y', 1),
      sample(Sides.DOWN,'y', -1),
      sample(Sides.LEFT,'x', 1),
      sample(Sides.RIGHT,'x', -1),
      sample(Sides.FRONT,'z', 1),
      sample(Sides.BACK,'z', -1),
    ].forEach((sample) => {
      it(`get side ${sample.side} should return 9 cubes with cube.${sample.axis}==${sample.value}`, function () {
        const side = getSide(sample.side)
        assert.equal(9, side.length)
        side.forEach(cube => {
          assert.equal(cube.position[sample.axis], sample.value);
        });
      });
    })
  });
});

function sample (side, axis, value){
  return {
    side: side,
    axis: axis,
    value: value
  }
}