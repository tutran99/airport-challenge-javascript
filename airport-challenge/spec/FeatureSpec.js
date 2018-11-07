'use strict';

describe('feature test', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes are instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.list_planes()).toContain(plane);
  });

});