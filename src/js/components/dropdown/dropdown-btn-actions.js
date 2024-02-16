import gsap from 'gsap';

let windowWidth = window.innerWidth;
let scrolledValue = window.scrollY;
const dropdownBtn = document.querySelector('.dropdown_btn');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header_content');

const getWindowWidth = () => {
	window.addEventListener('resize', () => {
		windowWidth = window.innerWidth;
	});
};

const getWindowScrolledValue = () => {
	window.addEventListener('scroll', () => {
		scrolledValue = window.scrollY;
	});
};

const onWindowScroll = () => {
	console.log(windowWidth, scrolledValue);

	if (scrolledValue > 50) {
		gsap.to('.dropdown_btn__first_item', {
			rotation: 0,
			duration: 0.5,
		});
		gsap.to('.dropdown_btn__second_item', {
			rotation: 0,
			duration: 0.5,
		});

		body.classList.add('body--header_on_scroll', 'body--dropdown_btn__visible');
		header.classList.remove('header--bg_change__grey');
	} else {
		body.classList.remove('body--header_on_scroll', 'body--dropdown_btn__visible');
	}
};

const headerActions = () => {
	body.addEventListener('click', () => {
		body.classList.add('body--header_on_scroll');
		gsap.to('.dropdown_btn__first_item', {
			rotation: 0,
			duration: 0.5,
		});
		gsap.to('.dropdown_btn__second_item', {
			rotation: 0,
			duration: 0.5,
		});
	});
	headerContainer.addEventListener('click', (e) => {
		e.stopPropagation();
	});

	window.addEventListener('scroll', onWindowScroll);

	onWindowScroll();
};

const dropdownBtnActions = () => {
	let intervalDisableBtn;
	window.addEventListener('scroll', () => {
		clearTimeout(intervalDisableBtn);
		dropdownBtn.disabled = true;

		intervalDisableBtn = setTimeout(() => {
			dropdownBtn.disabled = false;
		}, 100);
	});

	dropdownBtn.addEventListener('click', (e) => {
		if (e) {
			e.stopPropagation();
		}
		clearTimeout(intervalDisableBtn);

		if (windowWidth > 1024) {
			const isDropdownBtnActive = body.classList.contains('body--header_on_scroll');

			body.classList.toggle('body--header_on_scroll');
			header.classList.add('header--bg_change__grey');

			gsap.to('.dropdown_btn__first_item', {
				rotation: isDropdownBtnActive ? -45 : 0,
				duration: 0.5,
			});
			gsap.to('.dropdown_btn__second_item', {
				rotation: isDropdownBtnActive ? 45 : 0,
				duration: 0.5,
			});
		} else {
			body.classList.remove('body--header_on_scroll');

			const isDropdownBtnActive = body.classList.contains('body--mob__header_on_scroll');

			body.classList.toggle('body--mob__header_on_scroll');
			header.classList.add('header--bg_change__grey');

			gsap.to('.dropdown_btn__first_item', {
				rotation: isDropdownBtnActive ? -45 : 0,
				duration: 0.5,
			});
			gsap.to('.dropdown_btn__second_item', {
				rotation: isDropdownBtnActive ? 45 : 0,
				duration: 0.5,
			});
			console.log('small');
		}
	});
};

export { headerActions, dropdownBtnActions, getWindowScrolledValue, getWindowWidth };
