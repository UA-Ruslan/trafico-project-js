import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const initSwiper = () => {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation],
		speed: 400,
		spaceBetween: 100,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 2.26,
				spaceBetween: 20,
			},
		},
	});
	return swiper;
};
