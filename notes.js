/*
    STRING PATTERN-MATCHING METHODS
-----------------------------------------------
    The String type has several methods designed to pattern-match within the string. The first of these methods is match() and is essentially the same as calling a RegExp object's exec() method. The match() method accepts a single argument, which is either a regular-expression string or a RegExp object.

    let text = "cat, bat, sat, fat";
    let pattern = /.at/;



    let text = "cat, bat, sat, fat";
    let pattern = /.at/;

    //same pattern.exec(text);
    let matches = text.match(pattern);
    console.log(matches);                   // []
    console.log(matches.index);             // 0
    console.log(matches[0]);                // 'hat'
    console.log(pattern.lastIndex);         // 0



    const text1 = "cat, bat, sat, fat";
    let res = text1.replace("at", "un");
    console.log(res)
    
    
    
    
    // split() method
    
    
    let colorText = 'red, blue, green, yellow';
    let colors1 = colorText.split(' ');
    
    let colors2 = colorText.split(',', 2); 
    console.log(colors2);
    



    /* THE localeCompare() METHOD
    
    The last method is localeCompare(), which compares one string to another and returns one of three values as follows: 

    1. 
    
    If the string should come alphabetically before the string argument, a negative number is returned. (Most often this is -1, but it is up to each implementation as to the actual value).
    
    
    2. 

    If the string is equal to the string argument, 0 is returned.


    3. 

    If the string should come alphebetically after the string argument, a positive number is returned. (Most often this is 1, but once again, this is implementation-specific)
    
    
    e.g
    
    
    
    let strVal = 'yellow';
    console.log(strVal.localeCompare('brick'));     // 1
    console.log(strVal.localeCompare('yellow'));    // 0
    console.log(strVal.localeCompare('zoo'));       // -1


    
In this code, the string “yellow” is compared to three different values: "brick", "yellow",	and	"zoo". Because "brick" comes alphabetically	before "yellow", localeCompare() returns 1;	“yellow” is	equal to “yellow”, so localeCompare() returns 0	for	that line; and “zoo” comes after “yellow”, so localeCompare() returns –1 for that line. Once again, because the values are implementation specific, it is best to use localeCompare() as shown in this	example:
    

let strVal = "yellow";

function determineOrder(value) {
    let result = strVal.localeCompare(value);
    if (result < 0) {
    console.log(`The string 'yellow' comes before the string ${value}`);
  } else if (result > 0) {
    console.log(`The string 'yellow' comes after the string ${value}`);
} else {
    console.log(`The string 'yellow' is equal to string ${value}`);
}
}

determineOrder("yellow");



By	using	this	sort	of	construct,	you	can	be	sure	that	the	code	works	correctly	in
all	implementations.
The	unique	part	of	localeCompare()	is	that	an	implementation's	locale	(country
and	language)	indicates	exactly	how	this	method	operates.	In	the	United	States,
where	English	is	the	standard	language	for	ECMAScript	implementations,
localeCompare()	is	case-sensitive,	determining	that	uppercase	letters	come
alphabetically	after	lowercase	letters.	However,	this	may	not	be	the	case	in	other
locales


 /*
    SINGLETON BUILT-IN OBJECTS
--------------------------------------------------

    - Global Object
    - Math Object


    THE GLOBAL OBJECT

    The Global object is the most unique in ECMAScript because it isn't explicitly accesible. ECMAScript-262 specifies the Global object as a sort of catchall for properties and methods that don't otherwise have an owning object. 

    In truth, there is no such thing as a global variable or global function; all variables and function defined globally become properties of the Global object. Functions covered earlier in this book, such as isNaN(), isFinite(), parseInt(), and parseFloat(), are actually methods of the Global object. In addition to these, there are several other methods available on the Global object.



    URI-ENCODING METHODS
    --------------------------------------------

    The encodeURI() and encodeURIComponent() methods are used to encode URIs (Uniform Resource Identifiers) to be passed to the browser. To be valid, a URI cannot contain certain characters, such as spaces. The URI-encoding methods encode the URI's so that a browser can still accept and understand them, replacing all invalid characters with a special UTF-8 encoding.

    The encodeURI() method is designed to work on an entire URI (for instance, www.wrox.com/illegal value.js), whereas encodeURIComponent() is designed to work soley on a segment of a URI (such as illegal value.js from the previous URI). The main difference between the two methods is that encodeURI() does not encode special characters that are part of a URI, such as colon, forward slash, question mark, and pound sign, whereas encodeURIComponent() encodes every nonstandard character it finds.

   let	uri	=	"http://	www.wrox.com/illegal	value.js#start";
//	"http://	www.wrox.com/illegal%20value.js#start"
console.log(encodeURI(uri));
//	"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"
console.log(encodeURIComponent(uri)); 


    /* 
    THE eval() METHOD
----------------------------------------------------

The final method is perhaps the most powerful in the entire ECMAScript language: the eval() method. This method works like an entire ECMAScript interpreter and accepts one argument, a string of ECMAScript(or JavaScript) to execute.


let msg = 'hello world'
eval("console.log(msg)");

When the interpreter finds and eval(), it interprets the argument into actual ECMAScript statement and then inserts it into place. Code executed by eval() is considered to be part of the execution context in which the call is made, and the executed code has the same scope chain as that context. This means variables that are defined in the containing context can be referenced inside an eval()



let msg = "hello world";
eval("console.log(msg)")    // "hello world"


Here, the variable msg is defined outside the context of the eval() call, yet the call to console.log() still displays the text "hello world" because the second line is replaced with a real line of code. Likewise, you can define a function or variables inside an eval() call that can be referenced by the code outside, as follows: 


// eval(function sayYo() {console.log('Yo')});         // ReferenceError: sayYo is not defined


eval("function sayYo() {console.log('Yo')}");
sayYo();



Here, the sayYo() function is defined inside an eval() call. Because that call is replaced with the actual function, it is possible to call sayYo() on the following line. This works the same for variables




eval("let msg ='Hello world'; console.log(msg)");   // "Hello world"

eval("let holler = 'Hooray!'; console.log(holler)") // 'Hooray'

console.log(msg)        // ReferenceError: msg is not defined


Any variables or functions created inside of eval() will not be hoisted, as they are contained within a string when the code is being parsed. They are created only at the time of eval() execution.


eval() METHOD in STRICT MODE
-----------------------------------
In strict mode, variables and functions created inside of eval() are not accessible outside, so these last two examples would cause errors. Also, in strict mode, assigning a value to eval causes an error: 


"use strict";
eval("let name = 'ike'")
console.log(name)           



/* 
    GLOBAL OBJECT PROPERTIES 
---------------------------------------------

The Global object has a number of properties, some of which have already been mentioned in this book. The special values of undefined, NaN, and Infinity are all properties of the Global object. Additionally, all native reference type constructors, such as object and Function, are properties of the Global object.


The following are list of all the properties.

    PROPERTY            DESCRIPTION
--------------------------------------------------
    undefined           The special value undefined
    NaN                 The special value NaN
    Infinity            The special value Infinity
    Object              Constructor for Object
    Array               Constructor for Array
    Function            Constructor for Function
    Boolean             Constructor for Boolean
    String              Constructor for String
    Number              Constructor for Number
    Date                Constructor for Date
    RegExp              Constructor for RegExp
    Symbol              Pseudo-constructor for Symbol
    Error               Constructor for Error
    EvalError           Constructor for EvalError
    RangeError          Constructor for RangeError
    ReferenceError      Constructor for ReferenceError
    SyntaxError         Constructor for SyntaxError
    TypeError           Constructor for TypeError
    URIError            Constructor for URIError


    /* 

    THE WINDOW OBJECT
---------------------------------------------

Though ECMA-262 doesn't indicate a way to access the Global object directly, web browsers implement it such that the window is the Global object's delegate.


var color = 'red';

function sayColor() {
    console.log(window.color);
}
window.sayColor();


Here, a global variable named color and a global function named sayColor() are defined. Inside sayColor(), the color variable is accessed via window.color to show that the global variable became a property of window. The function is then called directly off of the window object as window.sayColor(), which pops up the console.log.




var color = 'red';

function sayColor() {
    console.log(window.color);
}
window.sayColor();

for(let props in window) {
    console.log(props);
}



Another way to retrieve the Global object is to use the following code: 


let global = function () {
    return this;
}()

 
This code creates an immediately-invoked function expression that returns the value of this. As mentioned previously, the this value is equivalent to the Global object when a function is executed with no explicit this value specified (either by being an object method or via call() /apply()). Thus, calling a function that simply returns this is a consistent way to retrieve the Global object in any execution environment.



    /* 
        THE Math Object
---------------------------------------------



*/