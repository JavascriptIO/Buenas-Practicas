
var converter = function(ratio, symbol, input) {
    return [(input*ratio).toFixed(1),symbol].join(" ");
}

Function.prototype.curry = function() {
	
	var toArray = function(obj) {
		return Array.prototype.slice.call(obj);
	};

    if (arguments.length<1) {
        return this; 
    }
    var __method = this;
    var args = toArray(arguments);
    return function() {
        return __method.apply(this, args.concat(toArray(arguments)));
    }
}

module.exports = {
	converter: converter
}; 