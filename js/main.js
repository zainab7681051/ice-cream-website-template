import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger, TextPlugin);

function gsap_animate(){
	gsap.from(".navigation, .section-title-primary, .section-title-secondary, .hero-img-container", {
		opacity:0, 
		y:10, 
		duration: 1, 
		ease: "power1.in",
		stagger: 0.5
	}, 0);

	gsap.from(
	  ".banana-icon, .espresso-icon, .grapes-icon, .mango-icon, .rasperry-icon, .strawberry-icon",{ 
	  	x: "-50vh",
	  	y:"10vh",
	    duration: 1,
	    ease: "power1.out",
	    stagger: 0.2
	  }, 2)
	gsap.from(".popup-button",{
		opacity:0, 
		duration:1.5,
		ease: "power1.out"
	}, 1.5)

	gsap.to(".popup-button", {
	  scale: 1,
	  ease: "power1.inOut",
	  duration:2.5,
	  scrollTrigger: {
	    trigger: "#intro",
	    start: "top top",
	    end: "+=150",
	    scrub: true,
	  }
	}, 0)

	gsap.to(".popup-button", {
	  display: "none",
	  ease: "power1.inOut",
	  duration:2.5,
	  scrollTrigger: {
	    trigger: "footer",
	    start: "top bottom",
	    end: "top center",
	    scrub: true
	  }
	}, 0);

	gsap.from(".text-on-bubble-img", {
		opacity:0, 
		top:"25%", 
		duration:1, 
		ease: "power1.in",
		scrollTrigger:{
			trigger:"#pink-bubbles-img-container",
			start: "top center",
			toggleActions: "play none none none",
		}
	},0);

	gsap.to(".count", {
		duration:1,
		ease: "none",
		innerText: 6,
		snap: { innerText: 1 },
		scrollTrigger:{
			trigger:".slide-show-section",
			start: "top center",
			toggleActions: "play none none none"
		},
		onUpdate: function() {
                const currentVal = Math.ceil(this.targets()[0].textContent);
                this.targets()[0].textContent = currentVal;
            },
	}, 0);

	gsap.to(".down-arrow",{
		y:85,
		repeat: -1,
		duration: 0.6,
		repeatDelay: 0.2,
		yoyo: true,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: ".down-arrow",
			start: "top 80%",
		}
	}, 0);

	gsap.from(".socials-img-container", {
		opacity: 0,
		duration: .5,
		stagger: 0.5, 
		ease: "power1.in",
		scrollTrigger:{
			trigger:".socials",
			start: "top center",
			toggleActions: "play none none none",
		}
	}, 0);

	gsap.from(".footer-statement, .footer-logo, .footer-links", {
		opacity: 0,
		y: 5,
		duration: 1,
		stagger: 0.5, 
		ease: "power1.in",
		scrollTrigger:{
			trigger:".footer-statement",
			start: "top 80%",
			toggleActions: "play none none none",
		}
	}, 0);
}
addEventListener("load", () =>{
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => gsap_animate())
})

