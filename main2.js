
var hours=24;
var minutes=60;
var seconds=60;
var totalSeconds=hours*minutes*seconds;
console.log(`Total seconds in a day are: ${totalSeconds}`);


var new_hours=12;
if(new_hours<24){
    console.log("Good Morning");
}  else {
    console.log("Good Night");
}


var fruits=["apple","banana","grapes","mango"];
console.log(`I like to eat ${fruits[0]} and ${fruits[3]}`);  


for(var i=0;i<fruits.length;i++){
    console.log(`Fruit at index ${i} is ${fruits[i]}`);
}

var person={
    name:"John Doe",
    age:30,
    profession:"Developer"
};

