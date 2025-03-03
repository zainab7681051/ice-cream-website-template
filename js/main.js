import {gsap_animate} from "./gsap_animation.js";

class HeroSlide{
	current_index = 0;
	constructor(){
		this.slides = document.querySelectorAll('.hero-slide');
		this.total_slides = this.slides.length;
		this.slide_icon_btns = document.querySelectorAll('.icon-btn');
	}
	show_hero_slide(){
		this.current_index = this.current_index % this.total_slides;
		console.log(`SLIDE NUMBER ${this.current_index}`)
		this.slides.forEach(slide => slide.classList.remove('hero-slide-active'));
		this.slides[this.current_index].classList.add('hero-slide-active');
		this.slide_icon_btns.forEach(btn => btn.classList.remove('icon-btn-active'));
		this.slide_icon_btns[this.current_index].classList.add('icon-btn-active');
		this.current_index++;
	}
	bind_slide_icons(){
		this.slide_icon_btns.forEach( (btn, index) => {
			btn.addEventListener('click', () => {
				console.log("BTN CLICKED!!!!!!!!", index, this.current_index);
				// this.handle_slide_icon_event(index);
			});
		})
	}
	handle_slide_icon_event(index){
		this.stop_autoplay();
		this.current_index = index;
		// this.show_hero_slide()
		this.start_autoplay();
		this.slide_icon_btns.forEach(b => b.classList.remove('icon-btn-active'));
		this.slide_icon_btns[index].classList.add('icon-btn-active');
	}
	start_autoplay(){
		return setInterval(() => this.show_hero_slide(), 5000);
	}
	stop_autoplay(){
		clearInterval(this.start_autoplay);
	}
}

addEventListener("load", () => {
	gsap_animate();

    const hero_slide = new HeroSlide();
    hero_slide.bind_slide_icons();
    hero_slide.start_autoplay();		
})

