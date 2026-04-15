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


    JavaScript is a garbage-collected language, meaning that the execution environment is responsible for managing the memory required during code execution. In languages such as C and C++, keeping track of memory usage is a principle concern and the source of many issues for developers.


    // 
        PERFORMANCE 
---------------------------------------------------
 
    */
    const obj = {name: 'mike'}


   const objk = Object.freeze({name: 'ike', age: 22})
   objk.isAdult = true;
   console.log(objk)
   console.log(obj)



  