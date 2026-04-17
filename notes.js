/*

for (var i = 0; i < 10; i++) {}
  console.log(i); // 10

// for (let j = 0; j < 10; ++j)
// console.log(j)                   // ReferenceError: j is not defined



let is technically hoisted in the JavaScript runtime, but because of the "temporal dead zone", you are prevented from using the variable above its actual declaration. Therefore, for the purposes of writing JavaScript, let is not hoisted in the same way as var.


/*
    CONSTANT DECLARATION USING const
-------------------------------------------

A variable declared using const must be initialized to some value. Once declared, it cannot be reassigned to a new value at any point in its lifetime. 

const a; // SyntaxError: Missing initializer in const declaration


const b = 3;
// console.log(b);     // 3

// b = 4 // TypeError: Assignment to constant variable



Apart from its const rule enforcement, const variables behave identically to let variables: 



if(true) {
    const a = 0;
}
// console.log(a) // ReferenceError: a is not defined

while(true) {
const b = 1;
}
console.log(b) // ReferenceError: b is not defined;


function foo() {
const c = 2

}
console.log(c) // ReferenceError: c is not defined

    {
        const d = 3;
    }
        
    console.log(d) // ReferenceError: d is not defined

    The const declaration only applies to the top-level primitive or object. In other words, a const variable assigned to an object cannot be reassigned to another reference value, but the keys inside the object are not proected;
    
    const obj1 = {};
    // obj1 = {}       // TypeError: Assignment to constant variable
    
    const obj2 =  {};
    obj2.name = 'Jake';
    console.log(obj2.name)      // 'Jake'
    
    

    If you wish to make the entire object immutable, you can use Object.freeze(), although attempted property assignment will not raise errror; it will just silently fail: 

    eg.

    const obj3 = Object.freeze({});
    obj3.age = 22
    // console.log(obj3) 
    
    
    const obj4 = {}
    obj4.age = 22
    // console.log(obj4); // undefined
    
    
    Because const declarations imply that the value is of a single type and immutable, the JavaScript runtime compiler can replace all instances of it with its actual value instead of performing a variable lookup through a lookup table. The Google Chrome V8 engine performs such an optimization.


    /* 

    IDENTIFIER LOOKUP
------------------------------------------------------
  
    When an identifier is referenced for either reading or writing within a particular context, a search must take place to determine what identifier it represents. The search starts at the front of the scope chain, looking for an identifier with the given name. 

    If it finds that identifier name in the local context, then the search stops and the variable is set; if the search doesn't find the variable name, continues along the scope chain. (Note that objects in the scope chain also have a prototype chain, so searching may include each object's prototype chain.).This process continues until the search reaches the global context's variable object. If the identifier isn't found there, it hasn't been declared.

    To better illustrate how identifier occurs, consider the following example:


    
    var color = 'blue';
    
    function getColor() {
        return color;
    }
    // console.log(window.color);
    console.log(getColor());
    
    
    When the function getColor() is called in this example, the variable color is referenced. At that point, a two-step search begins. First getColor()'s variable object is search for an identifier named color. When it isn't found, the search goes to the next variable object (from the global context) and then searches for an identifier named color. Because color is defined in the variable object, the search ends.

    Given this search process, referencing local variables automatically stops the search from going into another variable object. This means that identifiers in a parent context cannot be referenced if an identifier in the local context has the same name, as in this eg.
    
    var color  = 'orange';
    
    const findColor = () => {
        let color = 'red';
        return color;
    }
    console.log(findColor());       // 'red'
    
    In this modified code, a local variable named color is declared inside the findColor() function. When the function is called, the variable is declared. When the second line of the function is executed, it knows that a variable named colir must be used. 

    The seach begins in the local context, where it finds a variable named color with a value of 'red'. Because the variable was found, the search stops and the local variable is used, meaning that the function returns 'red'. 
    
    Any lines of code appearing after the declaration of color as a local variable cannot access the global color variable without qualifying it as window.color. 
    
    If one of the operands is an object and the other is not, the valueOf() method is called on the object to retrieve a primitive value to compare according to the previous rules.


    
    var color = 'red'
    const findNextColor = () => {
        const age = 22;
        // console.log(age) // 22
        return color;
    }

    console.log(findNextColor())    // 'red'
   

    /* 
        GARBAGE COLLECTION
----------------------------------------------------

    JavaScript is a garbage-collected language, meaning that the execution environment is responsible for managing the memory required during code execution. In languages such as C and C++, keeping track of memory usage is a principle concern and the source of many issues for developers.


    // 
        PERFORMANCE 
---------------------------------------------------
    
Keeping the amount of used memory to a minimum leads to better page performance. The best way to optimize memory usage is to ensure that you're keeping around only data that is necessary for the execution of your code. When data is no longer necessary, it's best to set the value to null, freeing up the reference--this is called dereferencing the value. 

This advice applies mostly to global values and properties of global objects. Local variables are dereferenced automatically when they go out of context, as in this eg.



function createPerson(name) {
    let localPerson = new Object();
    localPerson.name = 'name';
    return localPerson;
}
let globalPerson = createPerson('alice');

// do something with globalPerson

globalPerson = null;

console.log(globalPerson);  // null


/* 
    PERFORMANCE BOOSTS WITH const AND let DECLARATIONS
--------------------------------------------------------
Because const and let are scoped to block instead of a function, depending on how your code is organized this may signal to the garbage collector that an allocated variable is eligible for cleanup far sooner than it would have been when using var. This would occur in situations when the block scope terminates far sooner than the function scope.


 
/* 
    HIDDEN CLASSES AND THE delete OPERATION
-----------------------------------------------------

function article() {
    this.title = "Inauguration Ceremony";
    this.purpose = true
}
let a1 = new article()
let a2 = new article()

// console.log(a1);

function SecondArticle(title, opt_author) {
    // this.title = 'Inaugration Ceremony';
    this.title = title;
    this.author = opt_author;
}

let author1= new SecondArticle('Inaugration Ceremony', 'Ben');
let author2 = new SecondArticle('Money is the motivation','Jake');

delete author1.author;

// console.log(author1)
// console.log(author2)


 /*
    PRIMITIVE WRAPPER TYPES
-----------------------------------------------

The Boolean();
The Number();
The String();

These types can act like the other reference types.


let str1 = new String('some stirng');
let str2 = 'some text'

let res = str1.substring(2);

console.log(res);
console.log(str1.substring())


let falsObjek = new Boolean(false);
let false1 = false;
console.log(typeof falsObjek)
console.log (falsObjek instanceof Boolean);
console.log (false1 instanceof Boolean);



/*
    THE Number TYPE
----------------------------------------------

The Number type is the reference type for numeric values. To create a Number object, use the number constructor and pass in any number. Here's an example: 

let numObjkt = new Number(10);

let num =10;


let num = 10;
let num1 = 10.005;
console.log(num.toFixed(2))     // '10.00'
console.log(num1.toFixed(2))    // '10.01'


The rounding nature of toFixed() may be useful for applications dealing with currency, though it's worth nothing that arithmetic operations between multiple floating point values may not produce exact results -- for eg. 

0.1 + 0.2 = 0.3000000000004;



console.log(0.1 + 0.2)  // 0.300000000000000004
let num = 10; 
console.log(num.toExponential(1))   // '1.0e+1'


let num = 99;
console.log(num.toPrecision(1)) // '1e+2'
console.log(num.toPrecision(2)) // '99'
console.log(num.toPrecision(3)) // '99.0'


/* 
    THE isInteger() 
----------------------------------------------------

The isInteger() method is capable of discerning whether or not a number value is stored as an integer or not. This is useful when a trailing decimal 0 may mask whether or not the number is actually stored in floating point format: 


console.log(Number.isInteger(1))    // true
console.log(Number.isInteger(1.00))    // true
console.log(Number.isInteger(1.001))    // true



/* primitive values 
---------------------------------

Number()
String()
Boolean()
Symbol()
BigInt
null
undefined


let myObj = Object.freeze({name: 'ike'})

let num = 10;
let num1 = new Number();
console.log(typeof num, num1 instanceof Number, myObj instanceof Object)



    /* 
        THE String TYPE
----------------------------------------------

The String type is the object representation for strings and is created using the String constructor 


let strObj = new String('hello world');

The methods of a string object are available on all string primitives. All three of the inherited methods -- valueOf(), toLocaleString(), and toString() -- return the object's primitive string value.

Each instance of String contains a single property, length, which indicates the number of characters in the string. 


    let strVal = 'Hello world';
    console.log(strVal.length)  // 11




    /* 
        THE JavaScript CHARACTER
----------------------------------------------------

    JavaScript strings consist of 16 bit code units. For most characters, each 16 bit code unit will correspond to a single character. The length property indicates how many 16 bit code units occur inside the string: 



    let message = 'abcde';
    console.log(message.length) // 5
    
    Furthermore, the charAt() returns the character at a given index, specified by an integer argument to the method. Specifically, this method finds the 16 bit code unit at the specified index and returns the character that corresponds to that code unit: 

    let message = 'abcde';
    console.log(message.charAt(1))  // 'b'

    You	can	inspect	the	character encoding of a	given code unit with the charCodeAt() method. This method returns the code unit value at a given index, specified by an integer argument to the method. This method is demonstrated here:

    
    let message = 'abcde';
    
    //unicode "Latin small letter C" is U+0063
    // console.log(message.charCodeAt(2)); // 99
    
    
    console.log(message.length); //4
    console.log(message.charAt(1)); // 'b'
    console.log(message.charAt(2)); // 'c'
    console.log(message.charAt(3)); // 'd'
    console.log(message.charAt(4)); // 'e'
    
    console.log(message.charCodeAt(1)); // '98'
    console.log(message.charCodeAt(2)); // '98'
    


   /* 
        STRING-MANIPULATION 
---------------------------------------------------

    Several methods manipulate the values of strings. The first of these methods is concat(), which is used to concatenate on or more strings to another, returning the concatenated string as the result. 


    let strVal = 'Hello';
    let result = strVal.concat('world')
    
    console.log(strVal) // "Hello";
    console.log(result) // "Hello world"


    let strValue = "hello";
    let res = strValue.concat(" world", '!');
    console.log(res);


ECMAScript provides three methods for creating string values from a substring: slice(), substr(), and substring(). All three methods return a substring of the string they act on, and all accept either one or two arguments.

The first argument is the position where capture of the substring begins; the second argument, if used, indicates where the operation should stop. 

For slice() and substring(), this second argument is the position before which capture is stopped (all characters up to this point should stop). 

For slice() and substring(), this second argument is the position before which capture is stopped (all characters up to this point are included except the character at that point).

For substr(), the second argument is the number characters to return. If the second argument is omitted in any case, it is assumed that the ending position is the length of the string.

Just ast with the concat() method, slice(), substr(), and substring() do not alter the value of the string itself -- they simply return a primitive string value as the result, leaving the original unchanged.


let str = 'hello world';

console.log(str.slice(3));  // 'lo world'
console.log(str.substr(3));  // 'lo world'
console.log(str.slice(3, 7));  // 'lo w'
console.log(str.substring(3, 7));  // 'lo w'
console.log(str.substr(3, 7));  // 'lo worl'

There are different	behaviors for these	methods	when an argument is	a negative number. For the slice() method, a negative argument is treated as the length of the string plus the negative argument. For the substr() method, a negative first argument is treated as the length of the string	plus the number, whereas a negative	second number is converted to 0. For the substring() method, all negative numbers are converted to 0. Consider this example:

let	stringValue	=	"hello	world";

console.log(stringValue.slice(‐3));		    //	"rld"							
console.log(stringValue.substring(‐3));		//	"hello	world"			
console.log(stringValue.substr(‐3));	    //	"rld"							
console.log(stringValue.slice(3, ‐4));	    //	"lo	w"					
console.log(stringValue.substring(3, ‐4));	//	"hel"
console.log(stringValue.substr(3, ‐4));	    //	""	(empty	string)				




This example clearly indicates the differences between three methods. When slice() and substr() are called with a single negative argument, they act the same. This	occurs because –3 is translated into 7 (the length plus the argument), effectively making the calls slice(7) and substr(7). The substring() method, on the other hand, returns the entire string because –3 is translated to 0.


When the second	argument is	negative, the three methods	act	differently from one another. The slice() method translates the second argument to 7, making the call equivalent to	slice(3, 7)	and	so returning “lo w”. For the substring() method, the second	argument gets translated to	0, making the call equivalent to substring(3, 0), which	is actually equivalent to substring(0,3) because this method expects that the smaller number is	the	starting position and the larger one is	 the ending	position. For the substr() method, the second argument is also converted to	0, which means there should	be zero characters in the returned string, leading to the return value of an empty string.





    /* 
        STRING LOCATION METHODS
------------------------------------------------------

There are two methods for locating substrings within another string: indexOf()
and	lastIndexOf(). Both methods search a string	for	a given substring and return the position (or –1 if the substring isn't	found).	The	difference between the two is that the indexOf() method	begins looking for the substring at	the beginning of the string, whereas the lastIndexOf() method begins looking from the end of the string. Consider this example:

let	stringValue	=	"hello	world";

console.log(stringValue.indexOf("o"));		//	4
console.log(stringValue.lastIndexOf("o"));	//	7


Here,the first occurrence of the string "o"	is at position 4, which	isthe "o" in
"hello". The last occurrence of	the	string "o" is in the word "world", at position 7. If there is only one occurrence of "o" in	the	string,	then indexOf() and lastIndexOf() return the same position.


Each method	accepts	an	optional second	argument that indicates	the	position to start searching	from within	the	string.	This means	that the indexOf()	method
will start searching from that position	and	go toward the end of the string, ignoring everything before	the	start position, whereas lastIndexOf() starts searching from	the	given position and continues searching toward the beginning of the string, ignoring	everything between the given position and the end of the
string.	Here's an example:

let	stringValue	=	"hello	world";

console.log(stringValue.indexOf("o",	6));	    //	7
console.log(stringValue.lastIndexOf("o",	6));	//	4



When the second	argument of	6 is passed into each method, the results are the opposite from the previous example. This time, indexOf() returns 7 because it starts searching the string	from position 6	(the letter	"w") and continues to position 7, where "o" is found. The lastIndexOf() method returns 4 because the search starts from	position 6 and continues back toward the beginning of the string, where	it encounters the "o" in "hello". Using	this second	argument allows	you	to locate all instances	of a substring by looping callings to indexOf() or lastIndexOf(), as in the following example:


let	stringValue	=	"Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let	positions	=	new	Array();
let	pos	=	stringValue.indexOf("e");


    while(pos > -1)	{
        positions.push(pos);
        pos	= stringValue.indexOf("e", pos + 1);
    }

    console.log(positions);		//	"3,24,32,35,52"


This example works through a string	by constantly increasing the position at which indexOf() should	begin. It begins by	getting	the	initial	position of	“e”	in
the	string and then	enters a loop that continually passes in the last position plus one	to indexOf(), ensuring that	the	search continues after the last substring instance. Each position is stored in the positions array so the data can be used later.


    /* 
    STRING INCLUSION METHODS
----------------------------------------------
    - startsWith()
    - endsWith()
    - includes()

    let msg = 'foobarbaz';
    
    console.log(msg.startsWith('foo')) // true
    console.log(msg.startsWith('foo', 1)) // false

    console.log(msg.includes('bar')) // true
    console.log(msg.endsWith('baz', 4)) // false


    The	endsWith()	method	accepts	an	optional second	argument	that	indicates the position	that should	be treated as the end of the string. If this value is not provided,	the	length of the string is	used by	default. When a	second argument	is provided, the method	will treat the string as if it only	has	that many characters:

    let	message	=	"foobarbaz";
    console.log(message.endsWith("bar"));		//	false
    console.log(message.endsWith("bar",	6));		//	true
    
 





    /* THE trim()	METHOD
--------------------------------------------------------

ECMAScript features	a trim() method	on all strings. The	trim() method creates a	copy of	the	string, removes	all	leading	and	trailing white space, and then returns the result.	For	example:

    let	stringValue	=	"		hello	world		";
    let	trimmedStringValue	=	stringValue.trim();

    console.log(stringValue);	        //	" hello world	"
    console.log(trimmedStringValue);	//	"hello	world"

Note that since	trim() returns a copy of a string, the original	string remains intact with leading and trailing	white space	in place. Also available are the trimLeft()	and	trimRight()	methods	that remove	white space	only from the beginning	or end of the string, respectively. trimStart()	and	trimEnd() allow for	targeted white space removal. These methods	are	intended to	replace	trimLeft() and trimRight(), which have ambiguous meaning in	the	context	of right-to-left languages such	as Arabic andHebrew.

These two methods are effectively the opposite of padStart() and padEnd() with	a single space character. The following	example	adds white space to	a string and then removes it on	either side:

    let s =	' foo';

    console.log(s.trimStart());		//	"foo "
    console.log(s.trimEnd());		//	" foo"


    
    let msg = '  hello '
    console.log(msg.trim());        // 'hello'
    console.log(msg.trimLeft());    // 'hello '
    console.log(msg.trimRight());    // ' hello'
    

    
    
/* 
    THE repeat() METHOD
----------------------------------------
   
ECMAScript features a repeat() method on all strings. The repeat() method accepts a single integer argument count, copies the string count times, and concatenates all the copies.


let str = 'oh na na ';
console.log(str.repeat(2) + 'batman') // 'oh na na oh na na batman'

/* 
    THE padStart() and padEnd() METHODS
------------------------------------------

    The padStart() and padEnd() methods will copy a string and, if the length of the string is less than the specified length, add padding to either side of a string to extend it to a certain length. The first argument is the desired length, and the second is the optional string to add as a pad. If not provided, the U+0020 'space character will be used. 



    
    let str = 'foo';
    
    console.log(str.padStart(6)) // ' foo'
    console.log(str.padStart(6, '.')) // '...foo'
    
    console.log(str.padEnd(6)) // 'foo '
    console.log(str.padEnd(6, '.')) // 'foo...'
    
    let cardNo = '1239804359'
    console.log(cardNo.padEnd(13, '.')) // '1239804359...'
    
    
    The	optional argument is not limited to	a single character. If provided	a multiple character string, the method	will use the concatenated padding and truncate it to the exact length. Additionally, if the length is less than	or	 equal to the string length, the operation is effectively a	no-op.


    
    
    let str = 'foo';
    console.log(str.padStart(8, "bar")) // 'barbafoo'
    console.log(str.padStart(2))        // 'foo'
    
    console.log(str.padEnd(8, "bar"))   // 'foobarba'
    console.log(str.padEnd(2))          // 'foo'
    
    
/*
    STRING ITERATORS AND DESTRUCTURING
-------------------------------------------------

    The string prototype exposes an @@iterator method on each string, which allows for iteration through individual characters. Manual use of the iterator works as follows: 

    
    let msg = 'abc';
    let strIte = msg[Symbol.iterator]();
    
    console.log(strIte.next())  // {value: 'a', done: false }
    console.log(strIte.next())  // {value: 'b', done: false }
    console.log(strIte.next())  // {value: 'c', done: false }
    console.log(strIte.next())  // {value: 'undefined', done: true }
    

    When used in a for-of loop, the loop will use this iterator to visit each character in order
    
    for(const c of 'abcde') {
        console.log(c);         // 'a', 'b', 'c', 'd', 'e'
    }

    The string iterator becomes especially useful since it allows for interoperability with the destructuring operator. This allows you to easily split a string by its characters: 

    
    
    let msg = 'abcde';
    console.log([...msg]) // ['a', 'b', 'c', 'd', 'e']
    
    
    /* 
        STRING CASE METHODS
    -----------------------------------------
The	next set of	methods	involves case conversion. Four methods perform case conversion:	toLowerCase(), toLocaleLowerCase(), toUpperCase(), and toLocaleUpperCase(). The toLowerCase() and toUpperCase()	methods	are	the original methods, modeled after	the	same methods in	java.lang.String. The toLocaleLowerCase() and toLocaleUpperCase() methods are intended to be implemented based on a	particular locale. In many locales, the locale-specific methods are	identical to the generic ones; however, a few languages (such as Turkish) apply special	rules to Unicode case conversion, and this necessitates using the locale-specific methods for proper conversion. Here are some examples:

    let	stringValue	=	"hello	world";

    console.log(stringValue.toLocaleUpperCase());	//"HELLO WORLD"
    console.log(stringValue.toUpperCase());			//"HELLO WORLD"
    console.log(stringValue.toLocaleLowerCase());	// "hello world"
    console.log(stringValue.toLowerCase());		//"hello world"   
    

This code outputs "HELLO WORLD" for	both toLocaleUpperCase() and toUpperCase(), just as	"hello world" is output	for	both toLocaleLowerCase() and toLowerCase().	Generally speaking, if you do not know the language	in which the code will be running, it is safer to use the locale-specific methods.

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
    
    
    
    
    
    
    */