function myfunction(){
    var x=20;
    var y=30;
    var result=x+y;
    console.log(result);

}
myfunction();

function print(){
    var city='New York';
    console.log(city);
}

print();

function addNumbers(a, b){
    return a+b;
}

var sum=addNumbers(10, 20);

console.log(sum);

function multiplyNumbers(a, b){
    return a*b;
}

var product=multiplyNumbers(5, 10);

console.log(product);

function ourfunction(a, b){
    var result= a+b;
    console.log(result);
};
ourfunction(10,30);
ourfunction(89,98);
ourfunction(2,4);

function fn(name,city,state){
    console.log(name,city,state);
};

fn("john","new york","ny");
fn("arjun","hyd","hyd");
fn("arjun","banglr");

function ft(a){
    console.log(a);
    a();
    a();
    a();
};
ft(function(){
    var city="New York";
    console.log(city);
});
function f(){
    console.log("Hello");
    console.log("World");
}
console.log("sjdncsbc")
ft(f);

//retun statements
function f1(a,b){
var result=a+b;
return result;
};
var output=f1(1,2);
console.log(output);

function f2(x,y){
    var result=x+y;
    return function(){
        console.log(x+y);
    };
}
var output=f2(2,3);
console.log(output);
output();

function fnRetuen(){
    return "i am returning something";
    var x=20;
    console.log(x);
    console.log("tbjhvgvjhbusv");
}
var result=fnRetuen();

console.log(result);

var name=function(){
    console.log("john");
}
name();

