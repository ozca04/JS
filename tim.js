//in terminal use "node tim.js" to see outcome faster//

const A = "sa";

console.log("sa"); // for message 
console.log(`selam=${A}`)
console.error("error");// for red error
console.warn("warning");//yellowish warning 

////////////////////////////////////////////////
const prompt = require("prompt-sync")();

const v = prompt("type something");
console.log(v);

////////////////////////////////////////////////

const x = "234.5";
const y = 2;
const z = 2323;


console.log(Number(x) + y); //turns the string into number 
console.log(parseInt(x) + y);//" " " " "
console.log(string(x) + y);

