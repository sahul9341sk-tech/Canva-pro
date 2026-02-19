/* 4 HOUR TIMER (No Reset on Refresh) */

let totalTime = 4 * 60 * 60; // 4 Hours in seconds

if(!localStorage.getItem("endTime")){
let end = new Date().getTime() + totalTime*1000;
localStorage.setItem("endTime", end);
}

function startTimer(){

let now = new Date().getTime();
let endTime = localStorage.getItem("endTime");

let distance = endTime - now;

if(distance <= 0){
localStorage.removeItem("endTime");
let newEnd = new Date().getTime() + totalTime*1000;
localStorage.setItem("endTime", newEnd);
distance = newEnd - now;
}

let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
let seconds = Math.floor((distance % (1000*60))/1000);

document.getElementById("timer").innerText =
hours.toString().padStart(2,'0') + ":" +
minutes.toString().padStart(2,'0') + ":" +
seconds.toString().padStart(2,'0');
}

setInterval(startTimer,1000);


/* TELEGRAM ORDER */
function submitOrder(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let mobile=document.getElementById("mobile").value;
let plan=document.querySelector('input[name="plan"]:checked');

if(!name||!email||!mobile||!plan){
alert("Please fill all details & select plan");
return;
}

let msg=`Hello,
I want Canva Pro Subscription.

Selected Plan: ${plan.value}
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Payment Done ✅`;

window.open(
"https://t.me/zinmattteam?text="+encodeURIComponent(msg),
"_blank"
);
}