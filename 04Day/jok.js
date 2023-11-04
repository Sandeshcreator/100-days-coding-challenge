let arr=[
`Scene: With a patient in my medical exam room Me: How old are your kids? Patient: 
Forty-four and 39 from my wife who passed away, and from my second wife,...`,

`My daughter received this e-mail from a prospective student prior to the start of the 
semester: “Dear Professor, I won’t be able to come to any of your classes or...`,
`An exercise for people who are out of shape: Begin with a five-pound potato bag in 
each hand. Extend your arms straight out from your sides, hold them there for...`,


` e-mail from a prospect, I won’t be able to come to any of your classes or...`,

`  I won’t be able to come to any of your classes or...`


]

// let random=Math.floor(Math.random()*arr.length);
 //console.log(random);
 //alert(arr[random]);

// document.getElementById("demo").innerHTML = arr[random];

//document.addEventListener("DOMContentLoaded",alert("jsjs"));

// function myLoadEvent() {
//     var element = document.getElementById('circle');
//     element.style.opacity = '0.5';
//     }
//     document.addEventListener('DOMContentLoaded', myLoadEvent);

//document.body.style.backgroundColor="red";

function myFunction() {
    var element = document.getElementById('dott');
   // var circleOpacity = parseFloat(element.style.opacity);
    //element.style.opacity =  0.5;
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';


    }

    function moveCircle() {
        const circle = document.getElementById("circle");
        const currentPosition = parseInt(circle.style.left) || 0; // Get the current left position or default to 0
        const newPosition = currentPosition + 50; // Move the circle 50px to the right
        circle.style.left = newPosition + "px";
    }


//document.addEventListener("DOMContentLoaded", myFunction);


// function  myFunction() {
//     let cir=document.getElementById("dott");
//     cir.style.left="10px";
//   }


//   document.addEventListener("DOMContentLoaded", myFunction); 



//chapter8
setTimeout(document.getElementById("google").addEventListener("click",function () {
    window.location="https://www.google.com/"

    
}),9000)


//setInterval(function() {alert( "Hello")}, 1000);
