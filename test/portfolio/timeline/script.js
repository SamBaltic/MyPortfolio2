const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.timeline-items');


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



///////////////////////////
//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.animate-left',{
origin:'left',
duration:1000,
distance:'5rem',
delay:600,
rotate: {
			x: 0,
			y: 50,
			z: 0
		},
});

window.sr = ScrollReveal();
sr.reveal('.animate-right',{
origin:'right',
duration:1000,
distance:'5rem',
easing: 'cubic-bezier(0.5, 0, 0, 1)',
delay:600,
rotate: {
			x: 0,
			y: 50,
			z: 0
		},
});

window.sr = ScrollReveal();
sr.reveal('.animate-scale',{
origin:'center',
duration:1000,
scale:'1',
delay:900
});



