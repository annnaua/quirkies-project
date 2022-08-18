import 'locomotive-scroll/dist/locomotive-scroll.min.js';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
});
