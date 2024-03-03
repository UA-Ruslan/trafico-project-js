import layout from 'layout/layout';
import { pageLoad } from './utils';
import { elementParamsOnScroll } from './utils/onScrollActions';

export default class App {
	constructor() {
		this.init = this.init.bind(this);
		this.init();
	}

	importUtilities() {
		import('./sections/your-awesome-traffic/yourAwesomeTraffic').then(({ default: carAnim }) => {
			carAnim();
		});

		import('./components/logo/logo-anim').then(({ default: logoAnim }) => {
			logoAnim();
		});

		import('./utils/scrollSmooth').then(({ default: initLocomotiveScroll }) => {
			initLocomotiveScroll();
		});

		import('./components/dropdown/dropdown-btn-actions').then(
			({ dropdownBtnActions, onWindowScroll, onWindowResize }) => {
				dropdownBtnActions();
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
		import('./components/swiper/swiper').then(({ initSwiper }) => {
			initSwiper();
		});
	}

	init() {
		const initLayout = layout();
		this.importUtilities();
	}
}
