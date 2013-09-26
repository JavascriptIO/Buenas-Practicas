var ex1 = {noProperty : 10};

Object.defineProperties(ex1,
{
	aProperty: {
		value: 10,
		writable: false
	}
});

var ex2 = {};

Object.defineProperties(ex2,
{
	aProperty: {
		value: 10,
		writable: true
	}
});

var ex3 = {};

Object.defineProperties(ex3,
{
	aProperty: {
		value: 10,
		writable: true,
		enumerable: true
	}
});

var ex4 = {};

Object.defineProperties(ex4,
{
	aProperty: {
		value: 10,
		writable: false,
		enumerable: true
	}
});

module.exports = {
	ex1:ex1,
	ex2:ex2,
	ex3:ex3,
	ex4:ex4
};