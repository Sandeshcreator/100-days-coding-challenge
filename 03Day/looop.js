// let clss = {harry: 98, rohan: 70, aakash: 7};
//Q.n1
// for (let index = 0; index < Object.keys(clss).length; index++) {
//     console.log(Object.keys(clss)[index]+"marks"+ clss[ Object.keys(clss)[index]]);
    
// }


//3. Write a program to print “try again” until the user enters the correct number.


let crr=11;
let usin;
do {
     usin =prompt("lets check");
     alert("try again");
} while (usin!=crr);
alert("corect winner")