import layout from 'layout/layout';
import { pageLoad } from './utils';

export default class App {
	constructor() {
		this.init = this.init.bind(this);
		this.init();
	}

	importUtilities() {
		import('./components/your-awesome-traffic/yourAwesomeTraffic').then(({ default: carAnim }) => {
			carAnim();
		});

		import('./components/header/logo-anim').then(({ default: logoAnim }) => {
			logoAnim();
		});

		import('./utils/scrollSmooth').then(({ default: initLocomotiveScroll }) => {
			initLocomotiveScroll();
		});

		import('./components/dropdown/dropdown-btn-actions').then(
			({ headerActions, dropdownBtnActions, getWindowScrolledValue, getWindowWidth }) => {
				headerActions();
				dropdownBtnActions();
				getWindowScrolledValue();
				getWindowWidth();
			},
		);
	}

	init() {
		const initLayout = layout();
		pageLoad(() => {
			document.body.classList.add('body--loaded');
		});

		this.importUtilities();
	}
}
