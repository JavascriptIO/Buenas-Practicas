var Car = function() {
	var _speed = 0;
	Object.defineProperty(this, "speed", {
		get : function() { return _speed; },
		set: function(value) { 
			if (value > 0) { _speed = value; }
			},
		enumerable: true
	});
 }

module.exports = {
   Car: Car
};