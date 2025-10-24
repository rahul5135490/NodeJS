function greet(name, callback) {
    console.log("Hello " + name);
    callback();  // yeh callback function ko call karega
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Rahul", sayBye);
