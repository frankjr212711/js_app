



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


The only change between this example and the previous one is that two lines have been added to setName() that redefine obj as a new object with	a different name. When person is passed into setName(), its name property is set to “Alice.” Then the variable obj is set to be	a new object and its name property is set to “Greg.” If person were	passed by reference, then person would automatically be changed to point to the object whose name is “Greg.” However, when person.name is accessed again, its value	 is	“Alice,” indicating	that the original reference	remained intact	even though	the	argument's	value	changed
inside	the	function.	When	obj	is	overwritten	inside	the	function,	it	becomes	a
pointer	to	a	local	object.	That	local	object	is	destroyed	as	soon	as	the	function
finishes	executing
*/