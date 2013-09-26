var Vehicle =  function() {
	this.speed = 0;
	this.brake = function() { this.speed--; };
	this.accelerate = function() {this.speed++; };
};

var Plane = function() {
	this.height =0;
	this.up = function() {this.height++;};
}

Plane.prototype = new Vehicle();

module.exports = {
	Vehicle: Vehicle,
	Plane: Plane
}