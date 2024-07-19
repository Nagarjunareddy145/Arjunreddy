for (let i=1; i<=10; i++) {
    console.log(i);
}

var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
};
let val = 1;

while (val < 6) {
    console.log(val); 
    val += 1;
};
let test = 1;

do {
    console.log(test);
    test++;
} while(test <= 5);

let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
    console.log(key, myObj[key]);
};
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
};

let sum = 0, a = 1; 

// Label for outer loop 
outerloop: while (true) { 
    a = 1; 

    // Label for inner loop 
    innerloop: while (a < 3) { 
        sum += a; 
        if (sum > 12) { 

            // Break outer loop from inner loop 
            break outerloop; 
        } 
        console.log("sum = " + sum); 
        a++; 
    } 
}


