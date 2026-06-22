                                                                    /////////////////////////
                                                                    //Boolean(logical type)//
                                                                    /////////////////////////

//boolean type has only two values: true and false. 

let name = true; //yes, name field is checked 
let age = false; //bo, age field is not checked 

let isgreater = 4 > 1; 
alert( isgreater); //true

                                                                    //////////////////////////
                                                                    //Logical operators///////
                                                                    //////////////////////////

//there are four logical operators in JS 
    // || (OR)
    // && (AND)
    // ! (NOT)
    // ?? (Nullish Coalescing)

//                                                                          || (OR)

// if any of its arguments are true, it returns true, otherwise its false

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour = 9;
if (hour < 10 || hour > 18){
    alert('the office is closed');
}

let hour = 12;
let isweekend = true; 
if (hour < 10 || hour > 18 || isweekend){
    alert('the office is closed');   
}
// (OR)|| finds first truthy value

result = value1 || value1 || value3;

//letf to right, it stops at first true 

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

//

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

//
true || alert("not printed");
false || alert("printed");
// OR stops at first true so rest of the code gets bypassed 

//                                                                            && (AND)
//AND returns true if both operands are truthy and false otherwise:
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

//example with if 
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert('the time iss 12:30');
}

if (1 && 0) { // evaluated as true && false
  alert( "won't work, because the result is falsy" );
}

//AND “&&” finds the first falsy value
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

//Precedence of AND && is higher than OR ||
//The precedence of AND && operator is higher than OR ||.
//So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

//Don’t replace if with || or &&


//                                                                                 ! (NOT)
result = !value;
// 1.Converts the operand to boolean type: true/false.
// 2.Returns the inverse value.

alert( !true ); // false
alert( !0 ); // true