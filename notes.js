/*
    ARGUMENT PASSING
-----------------------------

All function arguments in ECMAScript are passed by value. This means that the value outside of the function is copied into an argument on the  inside of the function the same way a value is copied from one variable to another.

If the value is primitive, then it acts just like a primitive variable copy, and if the value is a reference, it acts just like a reference variable copy.

This is often a point of confusion for developers because variables are accessed both by value and by reference, but arguments are passed only by value.

When an argument is passed by value, the value is copied into a local variable (a named argument and, in ECMAScript, a slot in the arguments object).

When an argument is passed by reference, the location of the value in memory is stored into a local variable, which means that changes to the local variable are reflected outside of the function. (This is not possible in ECMAScript).

eg.





function addten(num) {
    num += 10;
    return num;
}
let count = 20;
let result = addten(count);
console.log(count)          // 20 - no change
console.log(result);        // 30

Here, the function addten() has an argument, num, which is essentially a local variable. When called, the variable count is passed in as an argument. This variable has a value of 20, which is copied into the argument num for use inside of addten().

Within the function, the argument num has its value changed by adding 10, but this doesn't change the original count that exists outside of the function.

The argument num and the variable count do not recognize each other; they only happen to have the same value. If num had been passed by reference, then the value of count would have changed to 30 to reflect the change made inside the function. This fact is obvious when using primitive values such as numbers, but things aren't as clear when using objects.

eg.


function setname(obj) {
    obj.name = 'Alice';
    obj.age = 22
}

let person = new Object();
console.log(person)         // {}

setname(person);
console.log(person.name, person.age)    // 'Alice'


In this code, an object is created and stored in the variable person. This object is then passed into the setname() method, where it is copied into obj. Inside the function, obj person both point to the same object. The result is that obj is accessing an object by reference, even though it was passed into the function by value.

When the name property is set on obj inside the function, this change is reflected outside the function, because the object that it points to exists globally on the heap. Many developers incorrectly assume that when a local change to an object is reflected globally, that means an argument was passed by reference. To prove that objects are passed by value, e.g.



function setName(obj) {
    obj.name = "alice";
    obj = new Object();
    obj.name = "greg";
}
let person = new Object();
setName(person);

console.log(person.name)        // 'alice'


The only change between this example and the previous one is that two lines have been added to setName() that redefine obj as a new object with	a different name. When person is passed into setName(), its name property is set to “Alice.” Then the variable obj is set to be	a new object and its name property is set to “Greg.” If person were	passed by reference, then person would automatically be changed to point to the object whose name is “Greg.” However, when person.name is accessed again, its value	 is	“Alice,” indicating	that the original reference	remained intact	even though	the	argument's value changed inside	the	function. When obj is overwritten inside the function, it becomes a pointer	to a local object.	That local object is destroyed as soon as the function finishes	executing.


/*
    DETERMINING TYPE
---------------------------------------------

The typeof operator, introduced in the previous chapter, is the best way to determine if a variable is a primitive type. More specifically, it's the best way to determine if a variable is a string, number, boolean, or undefined. If the value is an object or null, then typeof return "object", as in this example:


let s= 'alice';
let b = true;
let i = 22;
let u;
let n = null;
let o = new Object()


console.log(typeof s)   // 'string'
console.log(typeof b)   // 'boolean'
console.log(typeof i)   // 'number'
console.log(typeof u)   // 'undefined'
console.log(typeof n)   // 'object'
console.log(typeof o)   // 'object'

Although typeof works well for primitive values, it's of little use for reference values. Typically, you don't care that a value is an object -- what you really want to know is what type of object it is. To aid in this identification, ECMAScript provides the instanceof operator, which is ued with the following syntax:


    result = variable instanceof constructor


The instanceof operator returns true if the variable is an instance of the given reference type (identified by its prototype chain)


let obj = new Object();
let arr = []
let num =33
let name = 'ike'

console.log(obj instanceof Object); // true
console.log(arr instanceof Array)   // true
console.log(Array.isArray(arr))     // true

console.log(num instanceof Number)     // false
console.log(name instanceof String)     // false


All reference values, by definition, are instances of Object, so the instanceof operator always returns true when used with a reference value and the Object constructor. Similarly, if instanceof is used with primitive value, it will always return false, because primitives aren't objects.


/*
        EXECUTION CONTEXT AND SCOPE
-------------------------------------------------

The


var color = "blue";
function changeColor() {
  if (color === "blue") {
    color = "red";
} else {
    color = "blue";
}
}
changeColor();

// console.log(window.color)    // 'red'


In this simple example, the function changeColor() has scope chain with two objects in it: its own variable object (upon which the arguments object is defined) and the global context's variable object.

The variable color is therefore accessible inside the function, because it can be found in the scope chain.

Additionally, locally defined variables can be used interchangeably with global variables in a local context.

eg.


var color = 'blue';

function changeColor() {
    let anotherColor = 'red';

    function swapColors() {
        let tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // color, anotherColor and tempColor are all accessible here
    }
    // color and anotherColor are accessible here, but not tempColor
    swapColors();
}
// only color is accessible here changeColor();


There are three execution contexts in this code: global context, the local context of changeColor(), and the local context of swapColors(). The global context has one variable, color, and one function, changeColor(). The color context of changeColor() has one variable named anotherColor and one function named swapColor(),  but it can also access the variable color from the global context.

The local context of swapColor() has one variable, named tempColor, that is accessible only within that context. Neither the global context nor the local context of changeColors() has access to tempColor. With swapColors(), though, the variables of the other two contexts are fully accessible because they are parent execution contexts.

NOTE:

Function arguments are considered to be variables and follow the same access rules as any other variable in the execution context.


/*
    SCOPE CHAIN AUGEMENTATION
---------------------------------------------

Even though there are only two primary types of execution context, global and function (the third exists inside of a call to eval() ), there are other ways to augment the scope chain. Certain statements cause a temporary addition to the front of the scope chain that is later removed after code execution. There are two times when this occurs, specifically when execution enters either of the following:

    - The catch block in a try-catch statement
    - A with statement

Both of these statements add a variable object to the front of the scope chain. For the with statement, the specified object is added to the scope chain; for the catch thrown error object

function buildUrl() {
    let q = '?debug=true';

    with(location) {
        let url = href + qs;
    }
}

In this example, the with statement is acting on the location object, so location itself is added to the front of the scope chain. There is one variable, qs, defined in the buildUrl() function. When the variable href is referenced, it's actually referring to location.href, which is in its own variable object. When the variable qs is referenced, its referring to the variable defined in buildUrl(), which is in the function context's variable object. Inside the with statement is a variable declaration for url, which becomes part of the function's context and can therefore, be returned as the function value.







/*
    VARIABLE DECLARATION
--------------------------------

ECMAScript variables can either be function scoped or block scoped. Furthermore, a block scoped variable can be declared as a const.




/* Function Scope Declaration Using var
--------------------------------------------

When a variable is declared using var, it is automatically added to the most immediate context avaialable. In a function, the most immediate one is the function's local context; in a with statement, the most immediate is the function context. If a variable is initialized without first being declared, it gets



// var sum;
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

let result = add(10, 20);       // 30
console.log(window.sum);    // causees an error: sum is not a valid variable

// console.log(window)

Here, the function add() defines a local variable named sum that contains the result of an addition operation. This value is returned as the function value, but the variable sum isn't accessible outside the function. If the var keyword is ommitted from this example, sum becomes accessible after add() has been called  

function add(num1, num2) {
    sum = num1 + num2;
    return sum;    
}

let result = add(10, 20);   // 30
console.log(sum);



Here, the variable sum is initialized to a value without ever having been declared using var. When add() is called, sum is created in the global context and continues to exist even after the function has completed, allowing you to access it later.

NOTE: 

Initializing variables without declaring them is a very common mistake in JavaScript programming and can lead to errors. It's advisable to always declare variables before initializing them to avoid such issues. In strict mode, initializing variables without declaration causes an error.



A var declaration will be brought to the top of the function or global scope and before any existing code inside it. This is refered to as 'hoisting'. This allows you to safely use a hoisted variable anywhere in the same scope without consideration for whether or not it was declared yet. However, in practice, this can lead to legal yet bizarre code in which a variable is used before it is declared.

Here is an example of two equivalent code snippet in the global scope: 



var name = 'Jake';

// This is equivalent to: 

name = 'Jake';
var name;

// Here is an example of two equivalent functions: 


function fn1() {
    var name = 'Jake';
}

// This is equivalent to: 

function fn2() {
    var name;
    name = 'Jake';
}

// You can prove to yourself that a variable is hoisted by inspecting it before its declaration. The hoisting of the declaration means you will see undefined instead of referenceError: 


console.log(person);  // ReferenceError: person is not defined

console.log(person) // undefined
var person;

function fn3() {
    console.log(person)     // undefined
    var person = 'mike';
}
fn3()



/*
    BLOCK SCOPE DECLARATION USING let
-----------------------------------------------

Declaring variables with let operates much in the same way as var, but it is scoped at the block level. Block scope is defined as the nearest set of enclosing curly braces{}. This means if blocks, while blocks, function blocks, and even standalone blocks will be the extent of the scope of any variable declared with let.




if(true) {
    let a;
}
// console.log(a) // ReferenceError: a is not defined

while(true) {
    let b;
}
console.log(b) // ReferenceError: b is not defined


*/

function foo() {
    let c; 
}
console.log(c);

function getAge(x, y) {
return {x, y};
}

console.log(getAge(22, 'ok'));