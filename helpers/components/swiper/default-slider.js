import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/scss/scrollbar';
import { buildSwiper } from './build-swiper';

const CLASS_NAMES = {
	slider: '.our_clients__slider',
	wrapper: '.our_clients__slider_wrapper',
	arrowNext: '.js-some-slider-next',
	arrowPrev: '.js-some-slider-prev',
};

Swiper.use([Navigation]);

const someSlider = () => {
	const $sliderWrappers = document.querySelectorAll(CLASS_NAMES.wrapper);

	if (!$sliderWrappers.length) return;

	$sliderWrappers.forEach(($wrapper) => {
		const $slider = $wrapper.querySelector(CLASS_NAMES.slider);
		const $prevArrow = $wrapper.querySelector(CLASS_NAMES.arrowPrev);
		const $nextArrow = $wrapper.querySelector(CLASS_NAMES.arrowNext);

		buildSwiper($slider);

		const sliderInstance = new Swiper($slider, {
			observer: true,
			observeParents: true,
			speed: 800,
			// loop: true,
			navigation: {
				prevEl: $prevArrow,
				nextEl: $nextArrow,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				1023: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	});
};

export default someSlider;
