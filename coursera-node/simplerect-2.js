// uses call-back function
var rect=require('./rect-2');

function solverect(l,b){

	console.log("Solving for rectangle with l = "
                + l + " and b = " + b);

	rect(l,b,function(err,rectangle){
		if (err) {
	    console.log(err);
	}
	else {
	    console.log("The area of a rectangle of dimensions length = "
                 + l + " and breadth = " + b + " is " + rectangle.area());
            console.log("The perimeter of a rectangle of dimensions length = "
                 + l + " and breadth = " + b + " is " + rectangle.perimeter());
	}
	});
};

solverect(2,4);
solverect(3,5);
solverect(-3,5);