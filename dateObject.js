//const now = new Date();
//console.log(now);

//No 1
//const now = new Date();
//console.log(now.getFullYear());

//No 2
//const now = new Date();
//console.log(now.getDate());

//No 3
//const now = new Date();
//console.log(now.getMonth());


//const now = new Date();
//console.log(now.getHours());

//const now = new Date();
//console.log(now.getMinutes());

//const start = Date.now();
//console.log("starting timer...");

let now = new Date();

let year = now.getFullYear(); 
let month = now.getMonth() + 1; 
let date = now.getDate();
let day = now.getDay(); 
let hours = now.getHours(); 
let minutes = now.getMinutes(); 

// Find out the numbers of seconds elapsed from January 1, 1970 to now
let secondsSinceEpoch = Math.floor(now.getTime() / 1000);

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Date: ${date}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds since January 1, 1970: ${secondsSinceEpoch}`);
