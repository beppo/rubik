var assert = require('assert');
var { Sides, getSide } = require('./rubik');
describe('Rubik', function () {
  describe('#getSide()', function () {
    it('get side up should', function () {
      const sidesUp = getSide(Sides.UP)
      console.log(sidesUp)
      sidesUp.forEach(element => {
        assert.equal(element.position.y, 1);
      });
    });
  });
});
