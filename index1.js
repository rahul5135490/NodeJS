console.log("This is index1.js");
function greet() {
    console.log("Hello from index1.js!");
}

greet();

function add(a, b) {
    return a + b;
}
var result = add(5, 10);
console.log("The sum is: " + result);
console.log(result);

var add1 = function(a, b) {
    return a + b;
}
console.log(add1(3, 4));



