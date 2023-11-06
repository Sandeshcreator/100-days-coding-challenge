// let p = new Promise((resolve, reject) => {
//     console.log("promises is pending");
//     setTimeout(() => {
//         console.log("i am promises and i am fullfilled")
//         resolve(true)


//     }, 5000);
// })

// let p1 = new Promise((resolve, reject) => {
//     console.log("promises is pending");
//     setTimeout(() => {
//         console.log("i am promises and i am fullfilled")


//         reject(new Error("i am error"))
//     }, 5000);
// })


// console.log(p, p1)
// p.then((value) => {
//     console.log(value);
// })


// p1.catch((error) => {
//     console.log("some error ideintified");
// })


// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.type = "text/javascript"
//         script.src = src
//         document.body.appendChild(script);

//         script.onload = () => {
//             resolve("Script has been loaded sir")
//         }
//         script.onerror = () => {
//             reject(0);
//         }
//     })
// }




// let pp = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");

// pp.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log("We are having an error. Please wait.");
// });

 