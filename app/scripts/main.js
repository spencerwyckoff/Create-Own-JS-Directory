/*Procedure
1. User writes data into form
2. User clicks submit
3. We take data in each box and store them into an object
4. We take those variables and we compute 3 different functions:
	>Total Revenue = Price x Units Sold
	>Total Cost = Cost x Units Sold
	>Total Profit = (Revenue - Cost)/Units Sold
5. We take that answer and return it to it's corresponding box
*/
(function () {

'use strict';

}());

//DOM Manipulation
$('button').on('click', function(event) {
	event.preventDefault();
});

//Declare Variables
///////////ACTIVE///////ACTIVE///////////////////
var shirt; //the shirt object constructor
var unitName; //name of the unit
var unitPrice; //how much a unit sells for
var unitCost; //how much a unit costs
var unitMargin;
var unitProfit;
var unitsSold; //this month's current revenue
var totalRevenue; //total revenue
var totalCost; // total cost
var totalProfit; //total profit
var store;
//////////INACTIVE/////////INACTIVE//////////////
var lastYearSales;  //last year's revenue #'
var unitsSoldLastYear; //last year's unit sell count
var thisYearSales;  //this year's current revenue
var unitsSoldThisYear; //how many units were sold this past year
var unitsSoldThisMonth; //how many units were sold this month
var unitsOnHand;  //how many units are in stock
var theBuy;  //this is original purchase total 

//Formulas
///////////ACTIVE///////ACTIVE///////////////////
//Compute Shirt Object Functions
totalRevenue = function (shirt) {
		return "Total Revenue is: $" + (shirt.unitPrice * shirt.unitsSold);
};

totalCost = function (shirt) {
		return "Total Cost is: $" + (shirt.unitCost * shirt.unitsSold);
};

unitMargin = function (shirt) {
		return "The margin per unit is $" + (shirt.unitPrice - shirt.unitCost);
};

unitProfit = function (shirt) {
	return totalRevenue - totalCost;
};

//Global Change Shirt Object Methods
var changeUnitName = function (newName) {
	this.unitName = newName;
};
var changePrice = function (newPrice) {
	this.unitPrice = newPrice;
};
var changeCost = function (newCost) {
	this.unitCost = newCost;
};
var changeUnitsSold = function (unitsSold) {
	this.unitsSold = unitsSold;
};

//Shirt Object Constructor
var Shirt = function (name, price, cost, unitsSold) {
//Standard Propertie Values
	this.unitName = name;
	this.unitPrice = price;
	this.unitCost = cost;
	this.unitsSold = unitsSold;
	this.currency = "USD";
	this.currencyCode = "$";
//Change Property Value Methods
	this.changeName = function (newName) {
		this.unitName = newName;
	};
	this.changePrice = function (newPrice) {
		this.unitPrice = newPrice;
	};
	this.changeCost = function (newCost) {
		this.unitCost = newCost;
	};
	this.changeUnitsSold = function (newUnitsSold) {
		this.unitsSold = newUnitsSold;
	};
};

//Add Some Shirts to shirtInventory
var shirtInventory = [];

var GAM = new Shirt("GAM", 30, 5, 100);
	shirtInventory.push(GAM);

var boom = new Shirt("Boom", 25, 5, 100);
	shirtInventory.push(boom);

var goTime = new Shirt("Go Time", 18, 6, 200);
	shirtInventory.push(goTime);


function compareProfitShirts (shirt1, shirt2) { 
	if (shirt1.totalProfit > shirt2.totalProfit) {
		return shirt1.unitName + " is more profitable than " + shirt2.unitName;
	} else {
		return shirt2.unitName + " is more profitable than " + shirt1.unitName;
	};
};

function compareRevenueShirts (shirt1, shirt2) { 
	if (shirt1.totalRevenue > shirt2.totalRevenue) {
		return shirt1.name + " is more profitable than " + shirt2.name;
	} else {
		console.log(shirt2.unitName + " is more profitable than " + shirt1.unitName);
	};
};

//New Location
store = {
//Standard Properties
	storeName: "CFNA",
	address1: "1730 Taylor Street NW",
	address2: '',
	city:"Atlanta",
	state: "GA",
	zipCode: "30318",
	url: "http://www.crossfitnorthatlanta.com",
	phone: "(404) 355-4500",
	salesTax: .07,
	currency: "USD",
	currencyCode: "$",
	inventory: [],
};



