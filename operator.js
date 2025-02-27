//Exercise 2 (num 2)
let x = 4;
let y = 3;
console.log(4>3);
console.log(4>=3);
console.log(4<=3);
console.log(4==3);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4=='4');
console.log(4==='4');


//Exercise 2 (num 3)
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you.`)



//Exercise 2 (num 4)
//declare a variable
let challenge = '30 Days Of JavaScript'

//print the string
console.log(challenge)

//get the length of the string
console.log(challenge.length);

//Upper case
console.log(challenge.toUpperCase());

//lower case
console.log(challenge.toLowerCase());

//use subtr
console.log(challenge.substr(0, 2)); 
console.log(challenge.substring(0, 2));

//use includes
console.log(challenge.includes('Script'));

//use split method
console.log(challenge.split());

//split the string '30 days of JavaScript'
console.log(challenge.split(''));

//split the strings
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

//replace method
console.log(challenge.replace('JavaScript', 'Python'));



//Exercise 2(num 5)
//character at index 15
let str = '30 Days Of JavaScript';
console.log(str.charAt(15)); 

//character code 'J'
console.log(str.charCodeAt(11));

//use index of to position the occurence of the first word
console.log(str.indexOf('a'));

//use index of to position the occurence of the last word
console.log(str.lastIndexOf('a'));

//the first occurrence of the word 'because' using indexOf
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

//position of the last occurrence of the word 'because' using lastIndexOf
console.log(sentence.lastIndexOf('because')); 

//the position of the first occurrence of the word 'because' using search
console.log(sentence.search('because'));

//Use trim() to remove any trailing whitespace
let strWithSpaces = ' 30 Days Of JavaScript ';
console.log(strWithSpaces.trim());


//Exercise 2 (num 6)

//Use startsWith() to check if the string starts with "30"
console.log(str.startsWith("30"));

//Use endsWith() to check if the string ends with "JavaScript"
console.log(str.endsWith("JavaScript")); 

//Use match() to find all occurrences of "a"
console.log(str.match(/a/g));

//Use concat() to merge two strings
let mergedStr = "30 Days Of ".concat("JavaScript");
console.log(mergedStr);

// Use repeat() to print the string twice
console.log(str.repeat(2));



//Exercise 2(num 7)

//if 10 === 10
console.log(typeof '10' === 10);

//if 9.8 === 10
console.log(parseFloat('9.8') === 10); 

//if on is found both jargon and python
console.log('python'.includes('on')); 
console.log('jargon'.includes('on'));

//Check if 'jargon' is in the sentence
let phrase = "I hope this course is not full of jargon.";
console.log(phrase.includes('jargon'));

//Generate a random number between 0 and 100 inclusively
let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

//Generate a random number between 50 and 100 inclusively
let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

//Generate a random number between 0 and 255 inclusively
let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

// Access the 'JavaScript' string characters using a random number
let string = "JavaScript";
let randomIndex = Math.floor(Math.random() * string.length);
console.log(string[randomIndex]);



//Exercise 2 (num 8)
//using console.log and escape characters to print
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');


//use subtract to remove "because, because, because"
let statement = "You cannot end a sentence with because because because is a conjunction";
let startIndex = statement.indexOf("because");
let endIndex = startIndex + "because because because".length;
//using slice instead of subtract
let newStatement = statement.slice(0, startIndex) + statement.slice(endIndex);
console.log(newStatement);



//Exercise 2 (num 9)
// declare variables and discover there datatypes
let firstName = "Kemigisha";
let lastName = "Esther";
let country = "Uganda";
let city = "Kampala";
let age = 30;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); 
console.log(typeof lastName);  
console.log(typeof country);   
console.log(typeof city);      
console.log(typeof age);      
console.log(typeof isMarried); 
console.log(typeof year);   

//type of 10 equal to 10

console.log(typeof '10' === typeof 10);

//convert 10 string to number

let num = 10;
console.log(Number('10') === 10); 


//If parseInt '9.8'===10
let number = parseInt('9.8');
console.log(parseInt('9.8') === 10);
console.log(Math.round(parseFloat('9.8')) === 10);

//Truthy
console.log(Boolean(1));       
console.log(Boolean("Hello")); 
console.log(Boolean([]));

//Falsy
console.log(Boolean(0));     
console.log(Boolean(""));      
console.log(Boolean(null));  









