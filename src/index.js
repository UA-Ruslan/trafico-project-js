import './scss/main-global.scss';
import App from './js/app';

function requireAll(r) {
	r.keys().forEach(r);
}
requireAll(require.context('./images/icons/sprite-icons/', true, /\.svg$/));

function hidePreloader() {
	const preloader = document.querySelector('.preloader');
	if (preloader) {
		preloader.classList.add('preloader--hidden');
	}
}

function initializeApp() {
	const appInit = new App();
}

const intervalId = setInterval(() => {
	if (document.readyState === 'complete') {
		hidePreloader();
		initializeApp();
		clearInterval(intervalId);
	}
}, 100);
