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
	var toString = newName.string();
	this.unitName = toString;
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
function shirt(name, price, cost, unitsSold) {
//Standard Propertie Values
	this.unitName = name;
	this.unitPrice = price;
	this.unitCost = cost;
	this.unitsSold = unitsSold;
	this.currency = "USD";
	this.currencyCode = "$";
//Change Property Value Methods
	this.unitName = changeUnitName;
	this.changePrice = changePrice;
	this.changeCost = changeCost;
	this.changeUnitsSold = changeUnitsSold;
	this.totalRevenue = function (shirt) {
		return "Total Revenue is: $" + (shirt.unitPrice * shirt.unitsSold);
};
};

var GAM = new shirt("GAM", 30, 5, 100);
var boom = new shirt("Boom", 25, 5, 100);
var goTime = new shirt("Go Time", 18, 6, 200);

var shirtsArray = [GAM, boom, goTime];
//Computation Methods
	// this.unitMargin = function () {
	// 	return "this.currencyCode" + price - cost;
	// };
	// this.unitMarginPcent = function () {
	// 	return (price - cost) / price;
	// };
	// this.unitMarkup = function () {
	// 	alert(price - cost) / cost;
	// };
	// this.totalRevenue = function () {
	// 	return price * unitsSold;
	// };
	// this.totalCost = function () {
	// 	return cost * unitsSold;
	// };
	// this.totalProfit = function () {
	// 	return (price - cost) * unitsSold;	
	// };




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
//Ability to Change Property Values
	// location.storeName = "CFNA";
	// location.address1 = "1730 Taylor Street NW";
	// location.address2 = "";
	// location.city = "Atlanta";
	// location.state = "GA";
	// locaiton.zipCode = "30318";
	// location.url = "http://www.crossfitnorthatlanta.com";
	// location.phone = "(404) 355-4500";
	// location.salesTax = .07;
	// location.currency = "USD";
	// location.currencyCode = "$";
	// location.inventory = [];

// {function (unitName, unitPrice, unitCost, unitsSold) {








// var shirtsArray = [];
// shirtsArray.push(newShirt);

// $('.data-entry').submit(function() {
// 	console.log("i see you");
// 	event.preventDefault();

// });




// // INSTAGRAM API

// var dubsmash = 'https://api.instagram.com/v1/tags/dubsmashusa/media/recent?client_id=adcf4211a05c4d2b9290d57b3be5b155';


// $.ajax({
//   dataType: "jsonp",
//   url: dubsmash,
//   success: function (data) {
//     search_results = data;

// 	  var vid_urls = _.pluck(data.data, videos.standard_resolution) 
// 	  // {
// 	  // 		console.log(d.videos.standard_resolution.url);
// 	  //   	return d.videos.standard_resolution.url;	
// 	  //   });

//     for (var i = 0; i < 3; i++) {
//       var vid = '<h4>Today\'s 3 Random Dubsmashes!</h4>' + '<video width="320" height="240" class="vid" controls><source src="' + vid_urls[i] + '" type="video/mp4"></video>';

//       $('.vid-container').append(vid);
//     }
//   }
// });

// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

// //CAREER

// function jobInfo (employer, position, annualSalary, startDate) {
// 	this.employer = employer;
// 	this.position = position;
// 	this.annualSalary = annualSalary;
// 	this.startDate = startDate;
// }


// var smallBusiness = {
// 	annualIncome: 1000000,

// }


// var selfEmployedMinTax = function (annualIncome) {
// 	return annualIncome * .3
// }

// //MATH FUNCTIONS

// var add2 = function (a, b) {
//   return a + b
// };

// var add3 = function (a, b, c) {
//   return a + b + c
// };

// var subtract2 = function (startValue, minusValue) {
//   return startValue - minusValue
// };

// var smallestNum = function (a, b, c) {
//   if (a <= b && a <= c) {
//   	return a;
//   } else if (b <= a && b <= c) {
//   	return b;
//   } else {
//   	return c; 
//   };
// };

// var greatestNum = function (a, b, c) {
//   if (a >= b && a >= c) {
//   	return a;
//   } else if (b >= a && b >= c) {
//   	return b;
//   } else {
//   	return c; 
//   };
// };


