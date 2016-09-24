// Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

// console.log(array[2]);

// var returnVal = array[2]("Smith");
// console.log(" return val: " + returnVal);
// var a = "Hello World";
// console.log(a);


(function(name2){
	console.log("Hello " + name2);
})("Anu");