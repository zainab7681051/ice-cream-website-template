import { gsap } from "gsap";


// function animate_icons() {
// 	const tl=gsap.timeline();
// 	tl.to
// }
function animate(){
	const tl = gsap.timeline();
	tl.to(".navigation", {opacity:1, y:0, duration:1, ease: "power2.inOut"},0)
	.to(".section-title-primary", {opacity:1, y:0, duration:1, ease: "power2.inOut"},0)
	.to(".section-title-secondary", {opacity:1, y:0, duration:1, ease: "power2.inOut"},0)
	.to(".hero-img-container", {opacity:1, y:0, duration:1, ease: "power2.inOut"},0)
	.to(".popup-button",{opacity:1, duration:2,ease: "power2.inOut"}, 0.1)
	.from(
	  ".banana-icon, .espresso-icon, .grapes-icon, .mango-icon, .rasperry-icon, .strawberry-icon",
	  { x: "-50vh",
	  	y:"10vh",
	    duration: 2,
	    ease: "power3.out",
	    stagger: 0.2
	  }, 0.1)
}
addEventListener("load", () =>{
	animate();
})