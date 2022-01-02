var myNumber = 4;
console.log(myNumber);

//array
var myArray = [1, 2, 3, 5];
console.log(myArray[1]);

//manipulating array
//pushing and popping
//Arrays can also function as a stack - pushing in and out of an array

var myStack = [];
myStack.push(1);
myStack.push(2);
console.log(myStack)

//pop pushes the last element in an array out
console.log(myStack.pop())
console.log(myStack)

//unshift and shift method are similar to pop and push only from the beginning of an array
var myQueue = [];
myQueue.push(1);
myQueue.push(23);
myQueue.push(34);

console.log(myQueue);
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue);

var myArray = [1,3,4,5];
myArray.unshift(99); //add element to the start of an array
console.log(myArray);
myArray.push(23);//add element to the end of an array
console.log(myArray);

//Splicing arrays in JS removes a certain part from an array to create a new array
var myArray = [0,1,2,3,4,5,6,7,5,7,8,4,5];
var splice = myArray.splice(4,6);

console.log(myArray);
console.log(splice);


//operators are standard
var firstName = "Roger";
var lastName = "Artur";
var fullName = firstName + " " + lastName;
console.log(fullName);

var name = "John Smith";
//if statement - confirm does not exist?? check BA

if (name == "John Smith")
{
    console.log("Hello John, how are you");
}
else {
    console.log("Then, what is your name");
}

function checkNumber(myNumber)
{
    if (myNumber === 42)
    {
        console.log("Correct");
    }
    else
    {
        console.log("Incorrect");
    }
}

checkNumber(43)

myNumber = "42";
console.log(myNumber === 42);
console.log(myNumber == 42); // use ful if you are comparing the same values but different types as per this example.

//loops

// var i;
// for(i = 0; i < 10; i += 1)
// {
//     console.log(i);
// }

//or this will display the numbers 0 to 9
//this code will produce a factorial of whatever number you input
function factorial(yourNumber){
    var i;
    var j=1;
    for(i=1; i <= yourNumber; i ++)
    {
        j = j * i;

    }
    console.log(j)
}
factorial(12);

//iterate over an array to print out all of its members
var myArray = ["A", "B", "C", 1];
for (var i = 0; i < myArray.length; i++)
{
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}

//while logic - it will iterate as long as the condition is true
var i = 9;
while(i > 0)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}

//factorial with while
var c = 1;
var d = 1;
while(c < 10) //the condition is true
{
    d = d * c; // take the following action
    c++; //increment
}
console.log(d);

//break statement stops the execution of a loop

var i = 9;
while(true)
{
    console.log(i + " bottles of water on the wall");
    i -= 1;
    if(i == 0)
    {
        break;
    }
}

//break with while factorial
var c = 1;
var d = 1;
while(c < 10)
{
    d = d * c;
    c++;
    if(c == 9)
    {
        break; // what you are saying is if c = 9 then stop...everything before 9 will iterate
    }
}
console.log(d);

//continue skips the rest of the loop and returns to the beginning

//this will return prime numbers using continue keyword
var j;
for(i=1;i < 10; i++)
{

    if(i % 2 == 0)
    {
        continue;// basically this will skip this condition and run everything else. useful if you want to continue with loop after setting parameters
    }
  console.log(i);
}

// applying the concepts of the javascript functional and OOP principles...
//objects are usually used as a data structure, similar to dictionary in python and map in java

//initialise an object
var emptyObject = {};
var personObject = { firstName : "John",
                     lastName : "Smith"
}


//members addressing of an object..e.g. using personObject object we can use [] with string or just period and the member
//you can also use the below to add members to an object.
personObject.age = 23;
personObject["Salary"] = 14000;

//iteration
//iteration over members of a dictionary is not a trivial task, since iterating over objects can return objects that do not actually
//belong to an object

for(var member in personObject)
{
    if(personObject.hasOwnProperty(member))
    {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }


}

var person = {};
person.firstName = "Susan";
person.lastName = "Rosas";
person["age"] = 19;
person["country"] = "Japan";

for (var member in person)
{
    console.log(member + " = " + person[member])

}
//functions are code blocks with arguments
// they can be named or anonymous functions
function greet(name)
{
    return "Hello " + name + "!";
}

console.log(greet("Eric"));

//anonymous function

var greet = function(name)
{
    return "Hello " + name + "!";
}
console.log(greet("Eric"));


//pop-up boxes
//confirm is not defined...confirm will return true if ok is selected
//prompt returns a textbox if populated.
//aleert
//By running code in console, do you mean that you run it with Node.js?
//But 'prompt' (as well as 'alert', etc.) can't be used in server-side scripts executed by Node.js. ' +
//'You can only prompt the user with client-side' javascript, i.e. running in the browser via a tag in the rendered HTML,
// not the Javascript API engine running on the server.


//There's a very important difference between browser javascript and node.js. Browsers have a confirm function,
// while node does not. If you want to do something similar, you can use the readline module.

//callback is basically calling a function from the parameters of another function.
// It is useful in asynchronous programming. You use it to run a piece of code after something else has happened.

//one example of callback functions..i am calling master function in testing function.
function testing(master)
{
    master(1);
}
function master(maine)
{
    console.log(maine);
}

testing(master)

//named function with call back..
var message = function() {
    console.log("This message is shown after 6 seconds");
}

setTimeout(message, 6000) //setTimeout is a javascript function which evaluates an expression
// after a given period of time

//
setTimeout(function(){
    console.log("This message is shown after 10 seconds")
}, 10000);

//arrow functions

//they are generally the smae as a function.

//They are anonymous functions with special syntax, they dont use this, arguments or super. They cannot be used as
//constructors either.
//Arrow funcitons are often callbacks of native JS functions like map, filter and sort.

const greets = (name, age) => {return "Hello " + name + "!" + " Age " + age;} //you can write it like this when using more than one argument with 'return' in the function
console.log(greets("Eric", 17))

const grt = name => "Hello " + name + "!";
console.log(grt("Roland"));

//arrow with normal functions

let numbers = [3 ,4 ,1 ,2,9];
let numbers2 = [5,8,3,4,7, 23, 56, 9]

//old way
function multiplyByTwo(number)
{
    return number * 2;

}

//using the function multiplybyTwo to apply the function to the array elements

let multipliedNumbers = numbers.map(multiplyByTwo)

console.log(multipliedNumbers);

//using ES6 arrow functions
// const multiplyByTwo = number => number * 2;

let multipliedNumbers2 = numbers2.map(multiplyByTwo);

console.log(multipliedNumbers2);
