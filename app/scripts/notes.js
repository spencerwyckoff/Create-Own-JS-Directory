//Notes from 2/3/15

var Animal = function (name, species, weight) {

	this.name = name;
	this.species = species;
	this.weight = weight;
	this.isHouseTrained = false;

};

var myDog = new Animal("Rex", "canine", 150);


var items = [];

var Item = function (name, price, qty) {
	this.name = name;
	this.price = price;
	this.qty = qty || 100; //pass qty OR 100

};

var whiskey = new Item('Glenmorangie', 59, 5);
	items.push(whiskey);


	//OR OR OR OR

var Item2 = function (options) {
	
	var args = options || {};

	this.name = args.name;
	this.price = args.price;
	this.qty = args.qty || 100; //pass qty OR 100
	
};

var whiskey = new Item({name: "Glenmorangie", price: 59});
	items.push(whiskey);