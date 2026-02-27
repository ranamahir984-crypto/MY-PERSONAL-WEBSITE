/* LOADER */

window.onload=function(){

setTimeout(function(){

document.querySelector(".loader").classList.add("hidden")

},1500)

}



/* SCROLL ANIMATION */

window.addEventListener("scroll",function(){

var reveals=document.querySelectorAll(".reveal")

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight

var elementTop=reveals[i].getBoundingClientRect().top

var visible=150

if(elementTop<windowHeight-visible){

reveals[i].classList.add("active")

}

}

})



/* CUSTOM CURSOR */

var cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",function(e){

cursor.style.left=e.clientX+"px"

cursor.style.top=e.clientY+"px"

})



/* NAVBAR SCROLL */

window.addEventListener("scroll",function(){

document.querySelector("header").style.background="rgba(0,0,0,0.7)"

})

/* ACTIVE MENU */

var links=document.querySelectorAll("nav a");

links.forEach(link=>{

if(link.href===window.location.href){

link.style.color="#3b82f6";

}

});

/* COUNTER ANIMATION */

var counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

let start=0;

let end=counter.innerText;

let speed=50;

let count=setInterval(()=>{

start++;

counter.innerText=start;

if(start==end){

clearInterval(count);

}

},speed);

});

/* MAGNETIC BUTTON */

var buttons=document.querySelectorAll(".btn1");

buttons.forEach(btn=>{

btn.addEventListener("mousemove",function(e){

var x=e.offsetX-50;

var y=e.offsetY-20;

btn.style.transform="translate("+x/5+"px,"+y/5+"px)";

});

btn.addEventListener("mouseleave",function(){

btn.style.transform="translate(0,0)";

});

});

/* PARTICLES */

var canvas=document.getElementById("particles");

var c=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

for(let i=0;i<100;i++){

c.fillStyle="white";

c.beginPath();

c.arc(Math.random()*canvas.width,
Math.random()*canvas.height,
2,0,6.28);

c.fill();

}

/* ULTRA SMOOTH SCROLL */

const lenis = new Lenis()

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

/* PARALLAX */

window.addEventListener("scroll",function(){

var value=window.scrollY;

document.querySelector(".hero").style.transform=
"translateY("+value*0.2+"px)"

})

/* HERO 3D EFFECT */

var hero=document.querySelector(".hero")

document.addEventListener("mousemove",function(e){

var x=(window.innerWidth/2-e.pageX)/40;
var y=(window.innerHeight/2-e.pageY)/40;

hero.style.transform=
"rotateY("+x+"deg) rotateX("+y+"deg)"

})

/* CURSOR MORPH */

var links=document.querySelectorAll("a")

links.forEach(link=>{

link.addEventListener("mouseenter",function(){

document.querySelector(".cursor").classList.add("big")

})

link.addEventListener("mouseleave",function(){

document.querySelector(".cursor").classList.remove("big")

})

})

/* PAGE TRANSITION */

var links=document.querySelectorAll("a");

var transition=document.querySelector(".transition");

links.forEach(link=>{

link.addEventListener("click",function(){

transition.style.left="0";

})

})

/* SCROLL PROGRESS */

window.addEventListener("scroll",function(){

var scroll=window.scrollY;

var height=

document.body.scrollHeight-
window.innerHeight;

var progress=(scroll/height)*100;

document.querySelector(".progress").style.width=

progress+"%";

})

/* PRELOADER */

window.onload = function(){

var loader = document.querySelector(".preloader");

if(loader){

loader.style.display="none";

}

}

/* ADVANCED SCROLL ANIMATION */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section")
.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});

/* ACTIVE SECTION MENU */

window.addEventListener("scroll",()=>{

let sections=document.querySelectorAll("section");

let navLinks=document.querySelectorAll("nav a");

sections.forEach((sec,i)=>{

let top=window.scrollY;

let offset=sec.offsetTop-200;

let height=sec.offsetHeight;

if(top>=offset && top<offset+height){

navLinks.forEach(link=>link.style.color="white");

navLinks[i].style.color="#3b82f6";

}

});

});

/* BUTTON RIPPLE */

document.querySelectorAll(".btn1")
.forEach(btn=>{

btn.addEventListener("click",function(e){

var ripple=document.createElement("span");

ripple.style.left=e.offsetX+"px";

ripple.style.top=e.offsetY+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600)

});

});

/* PROJECT TILT */

document.querySelectorAll(".projectCard")
.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

let x=e.offsetX/5;

let y=e.offsetY/5;

card.style.transform=

"rotateX("+y+"deg) rotateY("+x+"deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});

/* SPOTLIGHT EFFECT */

var light=document.querySelector(".spotlight");

document.addEventListener("mousemove",function(e){

light.style.left=e.clientX-300+"px";

light.style.top=e.clientY-300+"px";

});

/* HERO FADE */

window.addEventListener("scroll",function(){

var hero=document.querySelector(".hero");

var scroll=window.scrollY;

hero.style.opacity=1-scroll/700;

})

/* NAVBAR ANIMATION */

let lastScroll=0;

window.addEventListener("scroll",()=>{

let current=window.scrollY;

if(current>lastScroll){

document.querySelector("header").style.top="-100px";

}

else{

document.querySelector("header").style.top="20px";

}

lastScroll=current;

});

/* THREE JS BACKGROUND */

var scene=new THREE.Scene();

var camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

var renderer=new THREE.WebGLRenderer({

canvas:document.getElementById("threebg"),

alpha:true

});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

camera.position.z=5;

var particlesGeometry=
new THREE.BufferGeometry();

var particlesCount=500;

var posArray=
new Float32Array(particlesCount*3);

for(let i=0;i<particlesCount*3;i++){

posArray[i]=(Math.random()-0.5)*10;

}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(posArray,3)
);

var particlesMaterial=
new THREE.PointsMaterial({

size:0.02

});

var particlesMesh=
new THREE.Points(
particlesGeometry,
particlesMaterial
);

scene.add(particlesMesh);

function animate(){

requestAnimationFrame(animate);

particlesMesh.rotation.y+=0.001;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

renderer.setSize(
window.innerWidth,
window.innerHeight
);

camera.aspect=
window.innerWidth/
window.innerHeight;

camera.updateProjectionMatrix();

});

/* FORM MESSAGE */

var form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(){

alert("Message Sent Successfully");

});

}

/* TOP BUTTON */

document.getElementById("topBtn")
.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

})

});

