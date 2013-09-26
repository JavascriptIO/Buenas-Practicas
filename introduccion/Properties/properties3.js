var Car = function() { }

Object.defineProperty(Car.prototype,  "speed", {
	get : function() { return this._speed; },
	set: function(value) { 
		if (value > 0) { this._speed = value; }
		},
	enumerable: true
});


module.exports = {
   Car: Car
};