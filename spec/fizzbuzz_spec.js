//testing
var fb = require('../fizzbuzz');

describe("A program that implements fizzbuzz", function() {
	
	it("can count from 1 to 5", function() {
		expect(fb.count(1,5)).toBe("1 2 3 4 5");
	});

	it("can count from 1 to 7", fucntion(){
		expect(fb.count(1,7)).toBe("1 2 3 4 5 6 7");
	});

});






