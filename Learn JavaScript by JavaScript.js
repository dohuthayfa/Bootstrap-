 
var name = "string"; //verabile name as string 
var number = 1;
var boolean = true;
var array = [1,2,3]; 
var object = {x:1, y:2}

typeof("") // string
typeof (1) // number
typeof (true) //boolean
typeof [1,2,3]  // array
typeof ({x:1, y:2}) // object

// output 
console.log()

///////////////////////////////////////////////

// Syntax Fixed and Variable values

//1-Fixed values = Literals
"Fixed values"
'Fixed values'

//2-Variable values = Variables.
var x; 
x=6; // number 

var name;
name= "Variable values" // string 

// Variables 

///////////////////////////////////////////////

//Operators 
var x=1; 
var y=2;
var result =0;
result = x+y ; //Addition
result = x-y ; //Subtraction
result = x*y ; //Multiplication
result = x**y ; //Exponentiation 
result = x/y ; //Division
result = x%y ; //Modulus (Division Remainder)
x= x++; //Increment
x= x--; //Decrement

//ddition assignment operator
var x = 10;
x += 5; 

//add (concatenate) strings
var txt1 = "Name";
var txt2 = "Last Name";
var txt3 = txt1 + " " + txt2;

///////////////////////////////////////////////

//Comparison Operators 
var x=0;
x== 5; // equal to
x===5; // is ? equal value and equal type
x!=5; // not equal
x!==5;// 	not equal value or not equal type
x>5;// greater than
x<5;// less than
x>=5;// greater than or equal to
x<=5;//less than or equal to
var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';//ternary operator
// same 
var age = 19;
var canDrive;
if (age > 16) {
    canDrive = 'yes';
} else {
    canDrive = 'no';
}

///////////////////////////////////////////////

//Functions

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
myFunction(1, 2)// calling or Invocation, invokes (calls) function



function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

myFunction(1, 2)

///////////////////////////////////////////////

// Objects 
var person = {name:"Huthayfa", age:26, weight:70, long:178 };

person.name = "Huthayfa"

person.age = 26

person.weight = 70

person.long = 178 

// or 

//Accessing Object 

//1-objectName.propertyName

person.name = "Huthayfa"

////2-objectName["propertyName"]
person["name"]

// this Keyword
 
var person = {
 firstName: "Huthayfa",
 lastName : "Doufesh",
  fullName : function() {
 return this.firstName + " " + this.lastName;
 }
};
//Accessing Object Methods
 
name = person.fullName();
person.fullName()
 
//String Length
 
var string = 'sara';
console.log(string.length);
var string = "sara";
console.log(string.length);


//Methods
// this Keyword

var person = {
  firstName: "Huthayfa",
  lastName : "Doufesh",
  
  fullName : function() {
  return this.firstName + " " + this.lastName;
  }
};
return this.fullName;

// Closures

var a = 4;
function myFunction() {
  return a * a;
}

// or 
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3




// Map >> make operation or arrive  for all element in the array 

//Multiply all array with 10:

ar numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

// get full name for each person in array:
var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
  var fullname = [item.firstname,item.lastname].join(" ");
  return fullname;
}

//

Var acc = []; empty array 
Each (number, function(nymber)
acc.push(number*2)  //operation
//use Map 

Map (number, function(nymber){
Return (number*2)  //operation

// other method use return 

Return  Map (number, function(nymber)
Return (number*2)  //operation

 }
Return  acc ; // new aaray 

// advanced 
Function map(coll, f){
Var acc =[];
if(!Array.isArray(coll)){ /// make sure is not array , thats means is “object”
}
Acc ={};
}
each(coll, function(element, key) {
Acc[key] = f(element, key); ///////// acc[i] delet , the value of array 
});
Return acc;

//filter

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

// reduce
// we use it to reduce use "for loop" or multiple functions to be implemented on the array; sum, average, max and min values 
//Round like Role all the numbers in an array, and display the sum: 
var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}