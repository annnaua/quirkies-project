import Swiper from 'swiper/bundle';
import '../../node_modules/swiper/swiper-bundle.js';
import '../../node_modules/swiper/swiper-bundle.css';

const swiperTale = new Swiper('.swiper-tale', {
	// loop: true,
	slidesPerView: 1,
	spaceBetween: 24,
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination-tale',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.tale .swiper-button-next',
		prevEl: '.tale .swiper-button-prev',
	},
});

const swiperRoadmap = new Swiper('.swiper-roadmap', {
	// loop: true,
	slidesPerView: 2,
	spaceBetween: 24,
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination-roadmap',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.roadmap .swiper-button-next',
		prevEl: '.roadmap .swiper-button-prev',
	},
});
