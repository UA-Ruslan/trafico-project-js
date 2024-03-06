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

document.addEventListener('DOMContentLoaded', () => {
	const images = document.querySelectorAll('img');
	let loadedImagesCount = 0;
	images.forEach((img) => {
		loadedImagesCount += 1;
		img.addEventListener('load', () => {
			if (images.length === loadedImagesCount) {
				hidePreloader();
			}
		});
	});

	const appInit = new App();
});
