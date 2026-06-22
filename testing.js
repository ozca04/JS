let name="bobr";
let surname="froglord";

console.log(name+surname);

console.log(`${name} ${surname}`) //not bobr froglord, it will be name surname

//NUMBER
alert(1/0);//infinity 
alert("joemama");//"" u name it 
alert(Infinity);// specifiy commend given

//BigInt

//In js values larger than (2^53-1), or less than -(2^53-1) cannot be represented 

//STRING
//a string must be surrounded by quotes

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//in js there are ony 3 types of quotes

    //"hello" : double --> simple quote 
    //'hello' : single  --> simple quote 
    //`hello` : backticks --> extended functionality quotes, they allow to embed variables via ${.....}

let name = "bober";
alert(`hello, ${bober}!`);
alert( `the result is ${1 + 2}` );

