var userdetails={
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}
console.log(userdetails);
var emp={
    id:105,
    name:"Arjun",
    age:25,
    department:"IT",
    salary:50000
}

var productdetails={
    productid:"P001",
    productname:"Laptop",
    price:15000
}

console.log(emp);
console.log(productdetails);

// Accessing nested properties

console.log(userdetails.address.street);
console.log(emp.department);
console.log(productdetails.price);

// Updating nested properties   

userdetails.address.street="456 Elm St";
console.log(userdetails.address.street);

emp.salary=60000;
console.log(emp.salary);

//insert the new property
emp.gender="male";

console.log(emp);
 //delete the property
delete emp.salary;
console.log(emp);

// create a new object with existing properties

var newEmp=Object.assign({}, emp);

newEmp.salary=55000;

console.log(newEmp);
