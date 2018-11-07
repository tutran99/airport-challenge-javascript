'use strict';  // does not allow undeclared variables

describe('', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('airport is empty by default', function() {
    expect(airport.default_planes()).toEqual([]);
  });
});