import { elementParamsOnScroll } from './utils/onScrollActions';

export default class App {
	constructor() {
		this.init = this.init.bind(this);
		this.init();
	}

	importUtilities() {
		import('./utils/preloader').then(({ default: preloader }) => {
			preloader();
		});
		import('./sections/your-awesome-traffic/yourAwesomeTraffic').then(({ default: carAnim }) => {
			carAnim();
		});

		import('./components/logo/logo-anim').then(({ default: logoAnim }) => {
			logoAnim();
		});

		import('./utils/scrollSmooth').then(({ default: initLocomotiveScroll }) => {
			initLocomotiveScroll();
		});

		import('./components/dropdown/dropdown-actions').then(
			({ dropdownActions, onWindowScroll, onWindowResize }) => {
				dropdownActions();
				onWindowScroll();
				onWindowResize();
			},
		);

		import('./sections/faq/faq').then(({ default: faqActions }) => {
			faqActions();
		});
		import('./sections/form/form').then(({ formBgAnim, formValidation }) => {
			formBgAnim();
			formValidation();
		});
		import('./utils/onScrollActions').then(({ default: onScrollActions }) => {
			onScrollActions(elementParamsOnScroll);
		});
		import('./utils/scrollTo').then(({ default: scrollTo }) => {
			scrollTo();
		});
		import('./components/swiper/swiper').then(({ initSwiper }) => {
			initSwiper();
		});
	}

	init() {
		this.importUtilities();
	}
}
