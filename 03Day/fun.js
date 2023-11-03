//1.	Write a method to find if a given number is even or odd. 
// let a;
//  odeve =(a)=>{
    
//         return a % 2==0?(warning ="even"):(warning ="odd");
// }
// let b = prompt("enter a numb")
// console.log(odeve(b));

//4.	Write a method to display reverse of a string.
//5.	Write a method to find if a given string is palindrome or not.


let sa ="mom";

revstri=(sa)=>{
    let revstrin="";
  for (let index = sa.length-1; index >= 0; index--) {
    revstrin+=sa[index];
  }
  console.log(revstrin);
 
  console.log( (revstrin== sa)?"its palen":"no palen")
}
revstri(sa);






//Write a method to convert given Celsius temperature into desired temperature as kelvin and Fahrenheit.

// let usin =prompt("enter a number in Celsius"); //take string

//  tempchange=(usin)=>{
//     usin = parseFloat(usin); // Convert user input to a number

//     let sss =prompt("enter desier kelvin or Fahrenheit?");
    
//     return sss === "kelvin"
//     ? usin + 273.15
//     : sss === "Fahrenheit"
//     ? (usin * 9/5) + 32
//     : "Invalid input for scale. Please enter 'kelvin' or 'Fahrenheit'.";
//  }

// console.log(tempchange(usin));

 

