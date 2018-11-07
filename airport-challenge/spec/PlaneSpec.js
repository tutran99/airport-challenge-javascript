'use strict';

describe('Plane', function () {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['readyForLanding']);
  });
  
  it('is able to land at an aiport', function() {
    plane.land(airport)
    expect(airport.readyForLanding).toHaveBeenCalledWith(plane);
  });
  Plane.prototype.land = function(airport){
    airport.readyForLanding(this);
  };
});