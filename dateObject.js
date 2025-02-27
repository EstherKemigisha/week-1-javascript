//21st feb
//Exercise 2(num 11)

let now = new Date();

let year = now.getFullYear(); 
let month = now.getMonth() + 1; 
let date = now.getDate();
let day = now.getDay(); 
let hours = now.getHours(); 
let minutes = now.getMinutes(); 

//  the numbers of seconds elapsed from January 1, 1970 to now
let secondsSinceEpoch = Math.floor(now.getTime() / 1000);

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Date: ${date}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds since January 1, 1970: ${secondsSinceEpoch}`);


//Exercise 2 (num 12)

//Area of the triangle
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question("Enter base: ", (base) => {
//     readline.question("Enter height: ", (height) => {
//       let area = 0.5 * parseFloat(base) * parseFloat(height);
//       console.log(`The area of the triangle is ${area}`);
//       readline.close();
//     });
//   })


//Perimeter of the triangle
  const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter side a: ", (sideA) => {
  readline.question("Enter side b: ", (sideB) => {
    readline.question("Enter side c: ", (sideC) => {

      //  perimeter
      let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);

      // the result
      console.log(`The perimeter of the triangle is ${perimeter}`);
      readline.close();
    });
  });
});


//Exercise 2 (num 13)
