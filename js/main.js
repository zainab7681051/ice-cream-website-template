import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function gsap_animate(){
	const tl = gsap.timeline();
	return tl.to(".navigation", {opacity:1, y:0, duration:1, ease: "power2.in"},0)
	.to(".section-title-primary", {opacity:1, y:0, duration:1, ease: "power2.in"},0)
	.to(".section-title-secondary", {opacity:1, y:0, duration:1, ease: "power2.in"},0)
	.to(".hero-img-container", {opacity:1, y:0, duration:1, ease: "power2.in"},0)
	.from(
	  ".banana-icon, .espresso-icon, .grapes-icon, .mango-icon, .rasperry-icon, .strawberry-icon",
	  { x: "-50vh",
	  	y:"10vh",
	    duration: 2,
	    ease: "power3.out",
	    stagger: 0.2
	  }, 0.1)
	.from(".popup-button",{opacity:0, duration:2,ease: "power2.out"}, 0.1)
	.to(".popup-button", {
	  scale: 1,
	  ease: "power2.inOut",
	  duration:0.5,
	  scrollTrigger: {
	    trigger: "#intro",
	    start: "top top",
	    end: "+=150",
	    scrub: true,
	  }
	}, 0)
	.to(".popup-button", {
	  display: "none",
	  ease: "power2.inOut",
	  duration:0.5,
	  scrollTrigger: {
	    trigger: "footer",
	    start: "top bottom",
	    end: "top center",
	    scrub: true
	  }
	}, 0)
	.to(".text-on-bubble-img", {opacity:1, y:0, duration:3, ease: "power2.in",
		scrollTrigger:{
			trigger:".text-on-bubble-img",
			start: "top center",
			end:"top top",
			scrub:false
		}
	},1)
}
addEventListener("load", () =>{
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', ()=>gsap_animate())
})