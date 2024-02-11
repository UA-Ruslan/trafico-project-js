import layout from 'layout/layout';
import { pageLoad } from './utils';

export default class App {
	constructor() {
		this.$htmlTag = document.querySelector('html');
		this.pageName =
			this.$htmlTag.dataset.templateName && this.$htmlTag.dataset.templateName.length > 0
				? this.$htmlTag.dataset.templateName
				: null;

		this.init = this.init.bind(this);
		this.init();
	}

	importUtilities() {
		const windowHeight = window.innerHeight;

		import('./components/your-awesome-traffic/yourAwesomeTraffic').then(({ default: carAnim }) => {
			const handleScroll = () => {
				if (window.scrollY * 2 + windowHeight >= 1184) {
					carAnim();
					window.removeEventListener('scroll', handleScroll);
				}
			};

			window.addEventListener('scroll', handleScroll);

			handleScroll();
		});

		import('./utils/scrollSmooth').then(({ default: initLocomotiveScroll }) => {
			initLocomotiveScroll();
		});

		import('./components/header/headerActions').then(({ default: headerActions }) => {
			headerActions();
		});
		import('./components/dropdown/dropdownBtnActions').then(({ default: dropdownBtnActions }) => {
			dropdownBtnActions();
		});
	}

	init() {
		const initLayout = layout();
		pageLoad(() => {
			document.body.classList.add('body--loaded');
		});

		this.importUtilities();
	}
}
