'use strict';

describe('Plane', function () {
  var plane;
  beforeEach(function() {
    plane = new Plane();
  });
  it('is able to land at an aiport', function() {
    expect(plane.land).not.toBeUndefined()
  });
});