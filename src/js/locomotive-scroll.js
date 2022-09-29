import LocomotiveScroll from 'locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.min.js';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
});
