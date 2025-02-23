//Exercise 2
let x = 4;
let y = 3;
//console.log(x>y);
//console.log(x>=y);
//console.log(x<=y);
//console.log(x==y);
//console.log(x===x);
//console.log(x!=x);
//console.log(x!==x);
//console.log(x!='x');
//console.log(x=='x');
//console.log(x==='x');

//Exercise 2
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log("I am" + ageDifference + " years older than you.");


let strNumber = '10';
let numNumber = 10;


console.log(typeof strNumber); 
console.log(typeof numNumber); 


let areTypesEqual = (typeof strNumber === typeof numNumber);
console.log(areTypesEqual); 


let number = parseInt('9.8');//converts the string '9.8' to the integer 9.
let isEqualToTen = (number === 10);
console.log(isEqualToTen);


let isJavaScriptFun = true; 
let isWeatherNice = false; 


console.log(typeof isJavaScriptFun); 
console.log(typeof isWeatherNice); 


const value = '10';
(typeof value === 'number') 
    {console.log(true);}


const floatValue = parseFloat('9.8');
(floatValue === 10) 
    {console.log(true);}


const word1 = 'python';
const word2 = 'jargon';
console.log(word1.includes('on') && word2.includes('on')); 


const sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon')); 


const randomNum0To100 = Math.floor(Math.random() * 101);
console.log(randomNum0To100);


const randomNum50To100 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum50To100);


const randomNum0To255 = Math.floor(Math.random() * 256);
console.log(randomNum0To255);


const str = 'JavaScript';
const randomIndex = Math.floor(Math.random() * str.length);
console.log(str.charAt(randomIndex));
