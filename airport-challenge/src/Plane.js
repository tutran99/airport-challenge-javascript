'use strict'; // does not allow undeclared variables

function Plane() {}

Plane.prototype.land = function() {
};

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};