var Car = function() { }
var _speed;


Object.defineProperty(Car.prototype,  "speed", {
	get : function() { return _speed; },
	set: function(value) { 
		if (value > 0) { _speed = value; }
		},
	enumerable: true
});


module.exports = {
   Car: Car
};