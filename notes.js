/*
    const DECLARATIONS
--------------------------------------------

const behaves identically to that of let but with one important difference -- it must be initialied with a value, and that value cannot be redefined after declaration.




// let name;
// const age;   //SyntaxError: missing initializer in const declaration

const age = 22;
// age = 33;     //SyntaxError: assignment to constant variable

// const still disallows redundant declaration

// const name = "Bobo";
// const name = 'Alice'; // SyntaxError

// const is still scoped to blocks

const name = "Bob";
if(true) {
    const name = 'Alice';
}
console.log(name)       // 'Bob'

The const declaration is only enforced with respect to the reference to the variable that it points to. If a const variable references an object, it does not violate the const constraints to modify properties inside that object




const person = {};
person.name = 'Bob';
console.log(person.name);


Even though the JavaScript engine is creating new instances of let iterator variables in for loops, even though const variables behave similarly to let variables, you cannot use const to declare for loops iterators


for(const i = 0; i<5; i++) {} //TypeError: assignment to constant variable


However, if you were to declare a for loop variable that is not modified, const is allowed -- precisely because a new variable is declared for each iteration. This is especially relevant in the case of for-of and for-in-loops: 


const mike = {
    name: 'mike',
    age: 33, 
    isMarried: true,
}
let i = 0;
for(const j = 7; i < 5; i++) {
    console.log(j)          // 7, 7, 7, 7
}

for(const key in {a: 1, b: 2}) {
    console.log(key);          // 'a', 'b';
}

for (const key in mike) {
    console.log(key);   // 'name', 'age', 'isMarried'
}

for(const key in window) {
    console.log(key);       
}

for(const value of [1, 2, 3, 4, 5]) {
    console.log(value);     // 1, 2, 3, 4, 5
}






/*
        DATA TYPES
-------------------------------------------------
There are seven data types (also called primitive types) in ECMAScript: 

    Undefined
    Null,
    Boolean,
    Number,
    BigIn,
    String, and
    Symbol. 

There is also one complex data type called Object, which is an unordered list of name -- value pairs. Because there is no way to define your own data types in ECMAScript, all values can be represented as one these eight. ECMAScript's data types have dynamic aspects that make each single data type behave like several.





/*
    THE typeof OPERATOR
----------------------------------------

Because	ECMAScript is loosely typed, there needs to be a way to determine the data type of a given variable. The typeof operator provides that information. Using the typeof operator on a value returns one of the	following strings:

“undefined”	if	the	value	is	undefined
“boolean”	if	the	value	is	a	Boolean
“string”	if	the	value	is	a	string
“number”	if	the	value	is	a	number
“object”	if	the	value	is	an	object	(other	than a function) or	null
“function”	if	the	value	is	a	function
“symbol”	if	the	value	is	a	Symbol
“bigint”	if	the	value	is	a	BigInt

The typeof operator is called like this: 



let message = 'some string';
console.log(typeof message)     // 'string'
console.log(typeof(message))     // 'string'
console.log(typeof 90)  // 'number'






/* 
        THE Undefined TYPE
-------------------------------------------------

The Undefined type has only one value, which is the special value undefined. When a variable is declared using a var or let but not initialized, it is assisned the undefined value.

eg.

let message;
console.log(message === undefined) // true

let message; 
// let age;

console.log(typeof message) // 'undefined'
console.log(typeof age)     // 'undefined'


The value undefined is falsy; therefore, you are able to more succinctly check for it wherever you might need to. Bear in mind, however, that many other possible values are also falsy, so be careful in scenarios where you need to test for an exact value of undefined rather than just a falsy value: 


let message;    // this variable is declared but has a value of undefined

// 'age' is not declared

if(message) {
    // this block will not execute
}
if(!message) { // turns into a true boolean value
    // this block will execute
}

if(age) {   // this will throw an error

}


/*
        THE NULL TYPE
--------------------------------------------
The Null type is the second data type that has only one value: the special value null. Logically, a null value is an empty object pointer, which is why typeof return "object" when it's passed a null value. 

e.g.

let car = null
console.log(typeof(car));   // 'object'

When defining a variable that is meant to later hold an object, it is advisable to initialize the variable to null as opposed to anything else. That way, you can explicitly check for the value to determine if the variable has been filled with an object reference at a later time,





let car = null;
car = ''
if(car != null) {
    console.log('filled')
}

The value undefined is a derivative of null, so ECMAS-262 defines them to be superficially equal as follows: 


console.log(null == undefined) // true


The	null type is falsy;	therefore, you are able	to more succinctly check for it wherever you might need	to.	Bear in mind, however, that many other possible values are also falsy, so be careful in scenarios where you	need to	test for an exact value	of null	rather than	just a falsy value.


let message = null
let age;

if(message) {
    //This block will not execute
}
if(!message) {
    // This block will execute
}

if(age) {
    console.log('this ') 
    // This block will not execute
}


window.addEventListener('keypress', function (e) {
    console.log(e.charCode);
})




/*
    THE BOOLEAN TYPE
---------------------------------------

The Boolean type is one of the most frequently used types in ECMAScript and has only two literal values: true and false. These values are distinct from numeric values, so true is not equal to 1, and false is not equal to 0.

Assignment of Boolean values to variables is as follows: 




number,
string,
boolean,
object,
function,
null,
undefined


Note that the Boolean literals true and false are case-sensitive, so True and False (and other mixings of uppercase and lowercase) are valid as identifiers but not a Boolean values.

Though there are just two literal Boolean values, all types of values have Boolean equivalent in ECMAScript. To convert a value into its Boolean equivalent, the special Boolean() casting function is called.


let message = 'Hello world';
let msg = ''
let messageAsBoolean = Boolean(message);
let msgAsBoolean = Boolean(msg);

console.log(messageAsBoolean);  // true
console.log(msgAsBoolean);      // false

    let found = true;
    let lost = false;


    DATA TYPE   TRUE VALUES             FALSE VALUES
---------------------------------------------------
    Boolean     true                    false
    String      none empty string       empty string
    Number      none zero number        0, NaN
    Object      any object              null
    Undefined   n/a                     undefined




/*  
    THE Number TYPE
---------------------------------------------------

The ECMAScript Number data type uses the IEEE-754 format to represent both integers and floating-point values (also called double-precision values in some languages). To support the various types of numbers, there are several different number literal formats.

The most basic number literal format is that of a decimal integer, which can be entered directly as shown here: 


let intNum = 55;        // integer
console.log(intNum) // 55

Integers can also be represented as binary (base 2), octal (base 8), or hexadecimal (base 16) literals. For a binary literal, the 0b prefix must be followed by a sequence of 1s and 0s: 





let binaryNum1 = 0b110; 
// let binaryNum2 = 0b333; // invalid binary - SyntaxError

console.log(binaryNum1)     // 6



An octal literal can be	defined	both implicitly	and explicitly.	For	the	implicit declaration, the first digit must be a	zero (0) followed by a sequence of octal digits	(numbers 0 through 7). If a	number out of this range is detected in	the literal, then the leading zero is ignored and the number is	treated	as a decimal, as in	the following examples:


let	octalNum1	=	070;			//	octal	for	56
let	octalNum2	=	079;			//	invalid	octal	-	interpreted	as	79

An octal literal can also be defined explicitly, with a	0o prefix:



let octalNum3 = 0o70; 
console.log(octalNum3)      // 56

// let octalNum4 = 0o79;       // invalid octal - SyntaxError

Octal literals are invalid when running in strict mode and will cause the JavaScript engine to throw a syntax error. To create a hexadecimal literal, you must make the first two characters 0x (case insensitive), followed by any number of hexadecimal digits (0 through 9, and A through F). Letters may be in uppercase or lowercase. e.g.



let hexNum1 = 0xA; // hexadecimal for 10
let hexNum2 = 0x1f; // hexadecimal for 31

console.log(hexNum1, hexNum2)            // 10, 31


Numbers created using binary, octal, or hexadecimal format are treated as decimal numbers in all arithmetic operations.





/*
        FLOATING-POINT VALUES
----------------------------------------------

To define a floating-point value, you must include a decimal point and at least one number after the decimal point. Although an integer is not necessary before a decimal point, it is recommended.


let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // valid but not recommended

For	very large or very small numbers, floating-point values	can	be represented using e-notation. E-notation is used	to indicate	a number that should be multiplied by 10 raised	to a given power.The format of e-notation in ECMAScript	is to have a number	(integer or loating-point)	followed by	an uppercase or	lowercase letter E, followed by	the	power of 10	to multiply by. Consider the following: 

let	floatNum = 3.125e7;     //	equal to 31250000 

In this	example, floatNum is equal to 31,250,000	even though	it is represented in a more	compact	form using e-notation. The notation	essentially	says, “Take
3.125	and	multiply it	by	10^7".


E-notation can also be used to represent very small numbers, such as 0.00000000000000003, which	can	be written more	succinctly as 3e–17. By default, ECMAScript	converts any floating-point	value with at least	six	zeros after	the	decimal	point into e-notation (for example,	0.0000003 becomes 3e–7).




Floating-point	values	are	accurate up to 17 decimal places but are far less accurate in arithmetic computations than whole numbers. For instance,	adding
0.1	and	0.2	yields 0.30000000000000004 instead of 0.3.	These small rounding errors make it	difficult to test for specific floating-point values. Consider this example

if(a + b == 0.3) {  // avoid
console.log('You got 0.3')
}
console.log(0.1 + 0.2)      //0.30000000000000004



/*
    NUMERIC SEPARATORS
--------------------------------------------

All numbers can use a single underscore as a numeric separator for increased readability. The underscore can appear as many times as needed in a number literal-- the intepreter will silently ignore them:



let oneMillion = 1_000_000;
let binary = 0b0100_0000;
let float = 1_000.000_001;

console.log(oneMillion)         // 1000000
console.log(binary)             // 64
console.log(float);             // 10000.0000001


The underscore cannot start or end a number literal, cannot reside nexr toa decimal, and cannot follow a leading 0:


// let invalid1 = _101;         // ReferenceError, _101 interpreted as variable name
// let invalid2 = 101_;         // SyntaxError
// let invalid3 = 0_01;         // SyntaxError
// let invalid4 = 1._4;            // SyntaxError



/*
    STATEMENS
----------------------------------------------


/* The if Statement
------------------------------------

One	of the most	frequently used	statements in most	programming	languages is the if	statement. The if statement	has	the	following syntax: 

    if(condition) statement1 else statement2



if(i>25)
console.log("Greater than 25.");//	one–line	statement
else {
console.log("Less than or equal	to 25."); //block statement
}


if(i>25) {
    console.log("Greater than 25.");
} else if (i < 0)	{
    console.log("Less than 0.");
} else {
    console.log("Between 0 and 25, inclusive.");
}






/* The do-while Statement
-----------------------------------------------------

The	do-while statement is a	post-test loop,	meaning that the escape	condition is evaluated only	after the code inside the loop has been	executed. The body of the loop is always executed at least once	before the expression is evaluated.	Here's the syntax: 



do {
    statement
} while	(expression);


And	here's	an	example	of	its	usage:

let	i =	0;
do {
    i	+=	2;
} while	(i	<	10)

In this	example, the loop continues	as long as i is less than 10. The variable starts at 0 and is incremented by two each time through the loop.




/* 
    The	while	Statement
-------------------------------------------------------

The	while statement is a pretest loop. This	means the escape condition is evaluated	before	the	code inside	the loop has been executed.	Because	of this, it	is possible that the body of the loop is never executed.Here's the syntax:

while(expression)	statement

And	here's	an	example	of	its	usage:

let	i =	0;
    while (i < 10)	{
        i += 2;
    }


In this example, the variable i	starts out equal to	0 and is incremented by	two each time through the loop.	As long as the variable is less than 10, the loop will continue.



/*      The	for	Statement
--------------------------------------------------------

The for	statement is also a	pretest	loop with the added capabilities of variable initialization	before entering the	loop and defining postloop code	to be executed.



Here's the syntax:

for	(initialization; expression; post-loop-expression) statement

for	(initialization; condition; increment expression) statement


And	here's an example of its usage:

let	count = 10;
for	(let i = 0; i < count; i++)	{
    console.log(i);
}

This code defines a	variable i that	begins with the value 0.The	for loop is entered only if the	conditional	expression (i <	count) evaluates to	true, making it	possible that the body of the code might not be	executed. If the body is executed, the postloop	expression is also executed, iterating the variable	i. This for loop is	the	same as he following:

    let	count =	10;
    let	i = 0;
    
    while(i < count) {
        console.log(i);
        i++;    
    }

Nothing can be done	with a for loop that can't be done using a while loop.


The	initialization, control	expression,	and	postloop expression	are all optional. You can create an	infinite loop by omitting all three, like this:

    for	(;;)	{		//	infinite	loop
        doSomething();
    }

Including only the control expression effectively turns	a for loop into	a while loop, as shown here:

    let	count	=	10;
    let	i	=	0;
    
    for	(;	i	<	count;	)	{
        console.log(i);
        i++;
    }

This versatility makes the for statement one of	the	most used in	the	language.


/* 
    The	for-in	Statement
---------------------------------------------------

The	for-in statement is	a strict iterative statement. It is used to enumerate the non-symbol keyed properties of an object.	Here's the syntax: for (property in expression) statement And here's an	example	of its usage:

for	(const	propName	in	window)	{
    document.write(propName);
}



/* 
    THE	for-of	Statement
----------------------------------------------

The	for-of statement is	a strict iterative statement. It is	used to	loop through elements in an	iterable object. Here's	the	syntax: for	(property of expression) statement
And	here's	an	example	of	its	usage:

for	(const	el	of	[2,4,6,8])	{
document.write(el);
}




/* Labeled	Statements
------------------------------------------------
It is possible to label	statements for later use with the following	syntax:

label:	statement

Here's	an	example:

    start:	for	(let i = 0;	i <	count;	i++)	{
                console.log(i);
            }

In this	example, the label start can be	referenced later by	using the break	or continue	statement. Labeled statements are typically used with nested loops.



/* The	break	and	continue	Statements
-------------------------------------------------------------------

The	break and continue statements provide stricter control over	the execution of code in a loop. The break statement exits the loop immediately, forcing execution to continue with	the	next statement after the loop. The continue statement, on the other	hand, exits the	loop immediately, but execution	continues from the top of the loop.	

Here's	an	example:

    let	num	=	0;
    for	(let i = 1;	i < 10;	i++)	{
        if (i % 5 ==0) {
            break;
        }
        num++;
    }
        console.log(num);		//	4



In this code, the for loop increments the variable i from 1	to 10. In the body of a loop, an if statement checks to	see if the value of i is evenly	divisible	by 5 (using	the	modulus	operator). 

If so, the break	statement is executed and the loop is exited. The num variable starts out at 0 and indicates the number of times the loop has been executed. After the break statement has been	hit, the next line of code to be executed is the console.log, which	displays 4.

The number of times the loop has been executed is four because when i equals 5, the	break statement causes the loop to be exited before num can be incremented.	A different effect can be seen if break is replaced	with continue like this:

    let	num	= 0;
    for	(let i = 1;	i < 10;	i++) {
        if (i %	5 == 0)	{
            continue;
        }
        num++;
    }
    
        console.log(num);		//	8




let num = 0;
for (let i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        break;
    }
    num++;
}
// console.log(num);

for (let i = 1; i < 5; i++) {
    // console.log(i);
}

const obj = {
    'name': 'ike',
    'age': 22,
    'adult': true
}

for (let keys in obj) {
    if (keys.includes('name')) {
        // console.log('available')    // x1 available
    } else {
        // console.log('not available') // x2 not available 
    }
}

let num0 = 0;
for (let i = 1; i < 10; i++) {
    // console.log(i)
    if (i % 5 == 0) {
        continue;
    }
    num0++
}
// console.log(num0)   // 8

let count = 0;
for(let i = 0; i < 5; i++) {
    // console.log(i)
    if(i % 3 == 0) {
        continue
    }
    count++
}
// console.log(count)  // 3


const obj = { name: "", age: "", isAlive: true };
for (const el of [2, 4, 6, 8]) {
    console.log(el);
}

for (key in obj) {
    console.log(key); // 'name', 'age', 'isAlive'
}
for (key in [2, 3, 4, 5]) {
    console.log(key); // '0', '1', '2', '3'
}

// for (const key of obj) {    // obj is not iterable
// console.log(key);
// }





// let count =4
// const res = count > 3 ? 'true' : 'false';


// console.log(res)



let num = 0;
for(let i =0; i <10;i++) {
    console.log(num)
    num++
}

let count = 0
for(let i = 0; i < 5; i++) {
    console.log(i)
    console.log(count)
    count++;
}

let arr = ['name', 'age', 22, true, ];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    
    // console.log('remeo')
}


for(let key of arr) {
    console.log(key)
}




/* Iterative Statements & method
----------------------------------------------------------

//for-each method 
notification_links.forEach(items => console.log(items))


// for statement
for(let i = 0; i < notification_links.length; i++) console.log(notification_links[i]);


// for-of statement
for(let item of notification_links) console.log(item)






/* 
  EXPONENTIAL OPERATOR
-------------------------------------------------

The	exponentiation operator	(**) is	equivalent to Math.pow().

console.log(Math.pow(3,	2);		//	9			
console.log   (3 ** 2);		    // 9

console.log(Math.pow(16, 0.5);	//	4 
console.log(16 ** 0.5);	        //	4	

The	operator also gets its own exponentiate	assignment	operator, **=, which performs the exponentiation and subsequent	assignment of the result:

let	squared	=	3;
squared	**=	2;
console.log(squared);		//	9

let	sqrt	=	16;
sqrt **=	0.5;

console.log(sqrt);					





/*
    NULLISH COALESCING OPERATOR
-------------------------------------------------
    The nullish coalescing operator ?? provides a concise way to handle nullish (null or undefined) values in expressions. It is a binary operator that returns the right-hand operand if the left-hand operand is either null or undefined. Otherwise, it returns the left-hand operand. e.g.

    // const variable = exepression ?? nullish_fallback_value;





    
    //nullish coelescing
    const res = 4>1 ?? 'coeliscing';
    // console.log(res)
    
    //conditional operator
    const pos = 5 !== undefined && 1 !== undefined ? 'correct' : 'wrong'
    // console.log(pos)
    
    
    const values = [null, undefined, 0, ''];
    
    // console.log(values.map(x => x || 'default'))
    // console.log(values.map(x => x ?? 'default' ))
    



    /* THE with STATEMENT
-------------------------------------------

let qs = location.search.substring(1);
let hostname = location.hostname;
let url = location.href;

// Here, the location object is used on every line. This code can be rewrittne using the with statemnt: e.g

with(location) {
    let qs = search.substring(1);
    let hostname = location.hostname;
    let url = location.href;
    
    
    console.log(url)
}


/*      THE switch STATEMENT
----------------------------------------------

Closely related to the if statement is the switch statement, another flow-control statement adopted from other languages. The syntax for the switch statement in ECMAScript closely resembles the syntax in other C-based languages, as you can see here: 

switch(expression) {
    case value1: 
        statement
        break;
    case value2:
        statement
        break;
    case value3:
        statement
        break;
    case value4:
        statement
        break;
    default: 
        statement 
}

const i = 55
switch(i) {
    case 25:
        console.log('25');
        break;
        case 35: 
        console.log('35');
        break;
        case 45:
            console.log('45')
            break;
            default: 
            console.log('other')
        }
        
        console.log(i)


/*
    FUNCTIONS
-------------------------------------------------



function sayI(arg0, arg1,..., argN) {
    statements
}

Here's an example: 


function sayI(name, message) {
    console.log(`Hello ${name}, ${message}`);
}

sayI('ike', 'how are you?');

function sum(sum1, sum2) {
    return sum1 + sum2
}
// console.log(sum(2, 2)); // 4

function diff(num1, num2) {
    if(num1 < num2) {
        return num2 - num1;
    } else {
        return num1 - num2
}
}
// console.log(diff(3,4))  // 1




/* 
    VARIABLES, SCOPE, AND MEMORY
----------------------------------------------------------

The	nature of variables in JavaScript, as defined in ECMA-262, is quite unique compared to that of other languages. Being loosely typed, a variable is literally just a name for a particular value at a particular time. Because there	are	no rules defining the type of data that	a variable must hold, a variable's value and data type can change during the lifetime of a script.Though this is an interesting, powerful, and problematic feature, there are many more complexities related to variables


/*
    PRIMITIVE AND REFERENCE VALUES
-----------------------------------------------------

ECMAScript variables may contain two different types of data: primitive and reference values. 

Primitive values are simple atomic pieces of data, while reference values are object that may be made up of multiple values. When a value is assigned to a variable, the JavaScript engine must determine if it's a primitive or a reference value. The seven primitive types were discussed in the previous chapter: 

1. Undefined
2. Null
3. Boolean 
4. Number
5. BigIn
6. String
7. Symbol

These variables are said to be accessed by value, because you are manipulating the actual value stored in the variable.

Reference values are objects stored in memory. Unlike other languages, JavaScript does not permit direct access of memory locations, so direct manipulation of the object's memory space is not allowed. When you manipulate an object, you're really working on a reference to that object rather than the actual object itself. 

Reference values are accessed by reference.


/* 
    DYNAMIC PROPERTIES
--------------------------------------------

Primitive and reference values are defined similarly: a variable is created and assigned a value. What you can do with those values once they're stored in a variable, however, is quite different. 

When you work with reference values, you can add, change, or delete properties and methods at any time.

eg.

let person = new Object();
    person.name = 'Alice'
    console.log(person.name) // 'Alice'


Here, an object is created and stored in the variable person. Next, a property called name is added and assigned the string value of “Alice.” The new property is then accessible from that point on, until the object is destroyed or the property is explicitly removed.

Primitive values can't have properties added to them even though attempting to do so won't cause an error.





let name = "Alice";
name.age = 22;
console.log(name.age)       // undefined


Here, a property called age is defined on the string name and assigned a value of 22. On the very next line, however, the property is gone. Only reference values can have properties defined dynamically for late use.

Note that the instantiation of a primitive type can be accomplished using only the primitive literal form. If you were to use the new keyword, JavaScript will create an Object type, but one that behaves like a primitive. 

eg.

let name1 = 'Alice';
let name2 = new String('Bob');
name1.age = 22;
name2.age = 33;

//  console.log(name1.age) // undefined
//  console.log(name2.age)

// console.log(typeof name1)   // 'string'
// console.log(typeof name2)   // 'object'



/* 
    COPYING VALUES
--------------------------------------------------
Aside from differences in how they are stored, primitive, and reference values act differently when copied from one variable to another. When a primitive value is assigned from one variable to another, the value stored on the variable object is created and copied into the lcoation for the new variable.

eg. 



OBJECT VALUE VARIABLE
-----------------------------------

let num1 = 5;
let num2 = num1;


console.log(num1, num2) // '5', '5'

Here, num1 contains the value of 5. When num2 is initialized to num1, it also gets the value of 5. This value is completely separate from the one that is stored in num1 because it's a copy of that value.

Each of these variables can now be used separately with no side effects. 

figure 4.1

Variable object before copy
----------------------------------
    num1 = 5 (Number type)


Variable object after copy
----------------------------------
num2 = 5 (Number type)
num1 = 5 (Number type)


REFERENCE VALUE VARIABLE
------------------------------------

When a reference value is assigned from one variable to another, the value stored on the variable object is also copied into the location for the new variable. The difference is that this value is actually a pointer to an object store on the HEAP.
Once the operation is complete, two variables point to exactly the same object, so changes to one are reflected on the other, as in the ff. eg.



let obj1 = new Object();
let obj2 = obj1;
obj1.name = 'Alice';

    console.log(obj2);  // {name: 'Alice'}



In this example, the variable obj1 is filled with a	new instance of an object. This value is then copied into obj2, meaning that both variables are now pointing to the same object. When the property name is set on obj1, it can later be accessed from obj2 because they both point to the same object.

Figure	4.2
shows the relationship between the variables on the variable object and the object on the heap


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

Within the function, the argument num has its value changed by adding 10, but this doesn't change the original count that exists outside of the function. The argument num and the variable count do not recognize each other; they only happen to have the same value. If num had been passed by reference, then the value of count would have changed to 30 to reflect the change made inside the function. This fact is obvious when using primitive values such as numbers, but things aren't as clear when using objects.

eg.

*/

function setname(obj) {
    obj.name = 'Alice';
    obj.age = 22
}

let person = new Object();
console.log(person)         // {}

setname(person);
console.log(person.name, person.age)    // 'Alice'


const oObj = {name: 'ike', age: 22, isAdult: false}

function hasObject(obj) {
    return [obj.name, obj.age, obj.isAdult]
}

const res = hasObject(oObj);
console.log(res)