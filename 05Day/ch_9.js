//Write a program to load a JS File in a browser using Promises. Use .then() to display an alert when the load is complete.

// const loadsrc=(src)=>{
//     return new Promise((resolve,reject)=>{
//     let script= document.createElement('script');
//     script.src=src;
//     document.body.appendChild(script);

//     script.onload = () => {
//         resolve("load com");
//     }
//     script.onerror = () => {
//         reject(0);
//     }
// })
// }

// let pp = loadScript("http://127.0.0.1:5500/web_Dom/Promisesthen.html"); 
// pp.then((value) => {
//     alert(value);
// }).catch((error) => {
//     console.log("We are having an error. Please wait.");
// });

//Create a promise which rejects after 3 seconds. Use an async/await to get its value. Use a try catch to handle its error.


const loadsrc=()=>{
    return new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        reject(new Error("i am error"))

    } , 3000);
   
})
}


let a =async()=>{
    
try {
    let c=await loadsrc();
    console.log(c)
        
    } catch (error) {
        console.log("err")
        
    }

}

a()