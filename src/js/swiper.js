import '../../node_modules/swiper/swiper-bundle.js';
import '../../node_modules/swiper/swiper-bundle.css';
import Swiper from 'swiper';

const swiperTale = new Swiper('.swiper-tale', {
	// loop: true,
	slidesPerView: 1,
	spaceBetween: 24,
	grabCursor: true,
});

const swiperRoadmap = new Swiper('.swiper-roadmap', {
	// loop: true,
	slidesPerView: 2,
	spaceBetween: 24,
	grabCursor: true,
});
