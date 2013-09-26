var Car = function() {
	this.speed = 1;
	this.accelerate = function() { this.speed ++;}
};

Car.prototype.brake = function() {
	this.speed--;
}

module.exports = {Car:Car};