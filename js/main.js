import {gsap_animate} from "./gsap_animation.js";

class HeroSlide{
	current_index = 0;
	autoply_id = null;
	constructor(){
		this.slides = document.querySelectorAll('.hero-slide');
		this.total_slides = this.slides.length;
		this.slide_icon_btns = document.querySelectorAll('.icon-btn');
	}
	show_hero_slide(){
		this.current_index = this.current_index % this.total_slides;
		this.toggle_elements_class(this.slides, this.current_index, "hero-slide-active");
		this.toggle_elements_class(this.slide_icon_btns, this.current_index, "icon-btn-active")
		this.change_hero_bg_color();
		this.current_index++;
	}
	toggle_elements_class(element, index, className, ){
		element.forEach(e => e.classList.remove(className));
		element[index].classList.add(className);
	}
	change_hero_bg_color(){
		const bg_color = document.querySelector(".hero-bg");
		const hero_txt_img_container = document.querySelector(".hero-txt-img-container");
		let color = getComputedStyle(bg_color).backgroundColor;
		console.log("color: ", color);
		hero_txt_img_container.style.backgroundColor = color;
	}
	bind_slide_icons(){
		this.slide_icon_btns.forEach( (btn, index) => {
			btn.addEventListener('click', () => {
				this.handle_slide_icon_event(index);
			});
		})
	}
	handle_slide_icon_event(index){
		this.stop_autoplay();
		this.current_index = index;
		this.show_hero_slide()
		this.start_autoplay();
		this.slide_icon_btns.forEach(b => b.classList.remove('icon-btn-active'));
		this.slide_icon_btns[index].classList.add('icon-btn-active');
	}
	start_autoplay(){
		this.autoply_id = setInterval(() => this.show_hero_slide(), 4000);
	}
	stop_autoplay(){
		clearInterval(this.autoply_id);
	}
}

addEventListener("load", () => {
	gsap_animate();

    const hero_slide = new HeroSlide();
    hero_slide.bind_slide_icons();
    hero_slide.start_autoplay();		
})

