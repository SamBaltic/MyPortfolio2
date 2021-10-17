const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');


hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function toggle(){
	var curtain = document.getElementById('curtain');
	curtain.classList.toggle('active')
}
//preloader
var loader = document.getElementById("preloader")
window.addEventListener("load", vanish);

function vanish() {
	loader.classList.add("disppear");
}

//skills card
//html
const slide1 = document.querySelector('.open1');
const container1 = document.querySelector('.html5');

slide1.addEventListener("click", () => {
  container1.classList.toggle("active1");
});
//css
const slide2 = document.querySelector('.open2');
const container2 = document.querySelector('.css3');

slide2.addEventListener("click", () => {
  container2.classList.toggle("active2");
});
//javascript
const slide3 = document.querySelector('.open3');
const container3 = document.querySelector('.js');

slide3.addEventListener("click", () => {
  container3.classList.toggle("active3");
});
//bootstrap
const slide4 = document.querySelector('.open4');
const container4 = document.querySelector('.bs');

slide4.addEventListener("click", () => {
  container4.classList.toggle("active4");
});
//react
const slide5 = document.querySelector('.open5');
const container5 = document.querySelector('.react');

slide5.addEventListener("click", () => {
  container5.classList.toggle("active5");
});
//vue
const slide6 = document.querySelector('.open6');
const container6 = document.querySelector('.vue');

slide6.addEventListener("click", () => {
  container6.classList.toggle("active6");
});

//spinning logo
const text = document.querySelector('.text-spin');
text.innerHTML = text.innerText.split("").map(
	(char, i) =>
	`<i style="transform:rotate(${i * 7.7}deg)">${char}</i>`
	).join("")

///////////////////////////
//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.animate-left',{
origin:'left',
duration:1000,
distance:'25rem',
delay:300
});

window.sr = ScrollReveal();
sr.reveal('.animate-right',{
origin:'right',
duration:1000,
distance:'25rem',
delay:600
});

window.sr = ScrollReveal();
sr.reveal('.animate-scale',{
origin:'right',
duration:1000,
scale:'1',
delay:900
});


window.sr = ScrollReveal();
sr.reveal('.animate-top',{
origin:'top',
duration:1000,
distance:'25rem',
delay:600
});

window.sr = ScrollReveal();
sr.reveal('.animate-bottom',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:100
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-1',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:200
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-2',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:300
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-3',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:400
});
window.sr = ScrollReveal();
sr.reveal('.animate-bottom-4',{
origin:'bottom',
duration:500,
distance:'25rem',
delay:500
});







//social media
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
		max: 30,
		speed: 400,
		glare: true,
		"max-glare": 1
	});













/*
//canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
	
let particlesArray;

//get mouse position
let mouse = {
	x:null,
	y:null,
	radius: (canvas.height/100) * (canvas.width/100)
	};

window.addEventListener('mousemove' ,
	function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
	}
);

//create particle
class Particle {
	constructor(x, y, directionX, directionY, size, color) {
		this.x = x;
		this.y = y;
		this.directionX = directionX;
		this.directionY = directionY;
		this.size = size;
		this.color = color;
	}
	//method to draw individual particles

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		ctx.fillStyle = '#fff';
		ctx.fill();
	}
	update(){
		//check if particles is still within canvas
		if (this.x > canvas.width || this.x < 0) {
			this.directionX = -this.directionX;
		}
		if (this.y > canvas.height || this.y <0) {
			this.directionY = -this.directionY;
		}
		//check collision direction
		let dx = mouse.x - this.x;
		let dy = mouse.y - this.y;
		let distance = Math.sqrt(dx*dx + dy*dy);
		if (distance < mouse.radius + this.size){
			if (mouse.x < this.x && this.x < canvas.width - this.size *10) {
				this.x += 10;
			}
			if (mouse.x > this.x && this.x > this.size * 10) {
				this.x -= 10;
			}
			if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
				this.y += 10;
			}
			if (mouse.y > this.y && this.y > this.size *10) {
				this.y -= 10;
			}
		}
		//move particles
		this.x += this.directionX;
		this.y += this.directionY;
		//draw
		this.draw();
	}
}

//create particle array
function init() {
	particlesArray = [];
	let numberOfParticles = (canvas.height * canvas.width) / 9000;
	for ( let i = 0; i < numberOfParticles; i++) {
		let size = (Math.random() * 5) + 1;
		let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
		let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
		let directionX = (Math.random() * 5) -2.5;
		let directionY = (Math.random() * 5) -2.5;
		let color = '#603c85';

		particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
	}	
}

//animation loop
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,innerWidth, innerHeight);

	for (let i = 0; i < particlesArray.length; i++) {
		particlesArray[i].update();
	}
	connect();
}
function connect(){
	for (let a = 0; a < particlesArray.length; a++) {
		for (let b = a; b < particlesArray.length; b++) {
			let distance = (( particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
			+ ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
			if (distance < (canvas.width/7) * (canvas.height/7)) {
				ctx.strokeStyle='rgba(255,255,255,1)';
				ctx.beginPath();
				ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
				ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
				ctx.stroke();
			}
		}
	}
}
init();
animate();


*/